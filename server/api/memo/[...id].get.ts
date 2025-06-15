import prisma from "../../../lib/prisma";

export default defineEventHandler(async (event) => {
    // return event.context.params!.id;
    event.node.res.setHeader("Content-Type", "application/json; charset=utf-8");
    const raw_id = parseInt(event.context.params!.id);
    const id = isNaN(raw_id) ? 0 : raw_id;
    
    return await prisma.memo.findUnique({
        where: {
            id: id,
        },
    })

})
