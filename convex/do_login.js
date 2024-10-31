"use node";

import { action } from "./_generated/server";
import { v, ConvexError } from "convex/values";
const bcrypt = require('bcryptjs');
import { internal } from "./_generated/api";
const jwt = require('jsonwebtoken');

export const doLogin = action({
    args: {username: v.string(), password: v.string()},
    handler: async (ctx, args) => {
        const user = await ctx.runQuery(internal.users.getUsers, {
            username: args.username
        });

        if (!user) {
            // ctx.error("User not found");
            throw new ConvexError("User not found");
            
        }

        if (!bcrypt.compareSync(args.password, user.password)) {
            throw new ConvexError("Invalid password");
        }

        return jwt.sign({ username: user.username }, process.env.secret, { expiresIn: '23h' });
    }});