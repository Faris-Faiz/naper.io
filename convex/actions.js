"use node";

import { action } from "./_generated/server";
import { v, ConvexError } from "convex/values";
const bcrypt = require('bcryptjs');
import { internal } from "./_generated/api";

export const doRegister = action({
    args: {username: v.string(), password: v.string()},
    handler: async (ctx, args) => {

        // cut the username and password to 20 characters
        args.username = args.username.substring(0, 20);
        args.password = args.password.substring(0, 20);

        const users = await ctx.runQuery(internal.users.getUsers, {
            username: args.username
        });
        
        if (users) {
            throw new ConvexError(`Chosen Username already exist!`);
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(args.password, salt);

        await ctx.runMutation(internal.register.createUser, {
            username: args.username,
            password: hash
        });
    }
});