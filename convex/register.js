import { mutation } from "./_generated/server";
import { v } from "convex/values";
import bcrypt from "bcryptjs";


export const get = mutation({
    args: {username: v.string(), password: v.string()},
    handler: async (ctx, args) => {

        await (ctx.db.query("users")
            .filter((q) => q.eq(q.field("username"), args.username))
            ).unique() ?
            ctx.error("Username already exists") : null;

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(args.password, salt, function(err, hash) {
                ctx.db.insert("users", {
                    username: args.username,
                    password: hash
                })
            })
        });
    },
});