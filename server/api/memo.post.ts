import prisma from "../../lib/prisma";

export default defineEventHandler(async (event) => {
    // UTF-8対策
    event.node.res.setHeader("Content-Type", "application/json; charset=utf-8");

    // keyはtitleとcontentのみ許可する
    // それ以外は許可しない
    // valueはどちらもstring、stringは適当でええやろ

    // titleは必須、contentは空を許す（その場合は空白文字列とする）

    // 基本bodyがおかしい場合は400を返す
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