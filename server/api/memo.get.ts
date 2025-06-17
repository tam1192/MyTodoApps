import prisma from "../../lib/prisma";

export default defineEventHandler(async (event) => {
    // UTF-8対策
    event.node.res.setHeader("Content-Type", "application/json; charset=utf-8");

    // 全て返す
    return await prisma.memo.findMany();
});