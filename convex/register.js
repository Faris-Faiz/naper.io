import { internalMutation } from "./_generated/server";
import { v } from "convex/values";



export const createUser = internalMutation({
    args: {username: v.string(), password: v.string()},
    handler: async (ctx, args) => {
        ctx.db.insert("users", {
            username: args.username.trim(),
            password: args.password
        })
    },
});