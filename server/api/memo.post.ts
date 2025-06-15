import prisma from "../../lib/prisma";

export default defineEventHandler(async (event) => {
    event.node.res.setHeader("Content-Type", "application/json; charset=utf-8");

    const allowKeys = ["title", "content"]

    const body = await readBody(event);

    if (Object.keys(body).filter((k)=>!allowKeys.includes(k)).length > 0) {
        throw createError({
            statusCode: 400,
            statusMessage: "invalid keys."
        })
    }

    if (body.title === undefined) {
        throw createError({
            statusCode: 400,
            statusMessage: "title is required."
        })
    }

    body.content = body.content??"";

    return await prisma.memo.create({
        data: body
    });
});