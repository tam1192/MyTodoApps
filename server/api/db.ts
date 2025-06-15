import prisma from "../../lib/prisma";

export default defineEventHandler(async (event) => {
    event.node.res.setHeader("Content-Type", "application/json; charset=utf-8");
    return await prisma.post.findMany();
});