import { internalQuery } from "./_generated/server";
import { v } from "convex/values";

export const getUsers = internalQuery({
    args: {username: v.string()},
    handler: async (ctx, args) => {
        return ctx.db.query("users").filter((q) => q.eq(q.field("username"), args.username)).unique();
    },
});