import prisma from "../../../lib/prisma";

export default defineEventHandler(async (event) => {
    // UTF-8対策
    event.node.res.setHeader("Content-Type", "application/json; charset=utf-8");

    // idは数値を受け取るが、数値でない場合は0にする。
    // (空白の場合も同然)
    const raw_id = parseInt(event.context.params!.id);
    const id = isNaN(raw_id) ? 0 : raw_id;
    
    // findUniqueで見つからない場合は、自動的にNoContentを返してくれる。
    return await prisma.memo.findUnique({
        where: {
            id: id,
        },
    })

})
