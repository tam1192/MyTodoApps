import { describe, it, expect, test } from "vitest";
import { setup, fetch, $fetch, startServer } from '@nuxt/test-utils/e2e'

describe('api_test', async ()=>{
    await setup({
        server: true,
        runner: "vitest",
        env: process.env,
    });
    
    test('t', async () => {
        const res = await $fetch("/api/memo");
        expect(res).toBe("");
    });

    // test('success_post_and_delete_titleonly', async () => {
    //     // 情報を書き込み、idを取得する
    //     const post_res = await $fetch("/api/memo", {
    //         method: "POST",
    //         body: JSON.stringify({title: "test"}),
    //         headers: { "Content-Type": "application/json" }
    //     });
    //     const id = post_res.id;

    //     // 書き込んだ情報を取得する
    //     const get_res: any = await fetch(`/api/memo/${id}`);
    //     const get_res_json = await get_res.json();
    //     expect(get_res.status).toBe(200);
    //     expect(get_res_json.title).toBe("test");

    //     // 書き込んだ情報を削除する
    //     const del_res = await fetch(`/api/memo/${id}`, {
    //         method: "DELETE",
    //     });
    //     expect(get_res.status).toBe(200);
    //     const after_get_res: any = await fetch(`/api/memo/${id}`);
    //     expect(after_get_res.status).toBe(204);
    //     expect(after_get_res.statusText).toBe("No Content");
    // });

    // test('success_post_and_delete', async () => {
    //     // 情報を書き込み、idを取得する
    //     const post_res = await $fetch("/api/memo", {
    //         method: "POST",
    //         body: JSON.stringify({title: "test", content: "hello"}),
    //         headers: { "Content-Type": "application/json" }
    //     });
    //     const id = post_res.id;

    //     // 書き込んだ情報を取得する
    //     const get_res: any = await fetch(`/api/memo/${id}`);
    //     const get_res_json = await get_res.json();
    //     expect(get_res.status).toBe(200);
    //     expect(get_res_json.title).toBe("test");
    //     expect(get_res_json.content).toBe("hello");

    //     // 書き込んだ情報を削除する
    //     const del_res = await fetch(`/api/memo/${id}`, {
    //         method: "DELETE",
    //     });
    //     expect(get_res.status).toBe(200);
    //     const after_get_res: any = await fetch(`/api/memo/${id}`);
    //     expect(after_get_res.status).toBe(204);
    //     expect(after_get_res.statusText).toBe("No Content");
    // });

    // test('failed_post_non_title', async () => {
    //     // タイトルが存在しない書き込み
    //     const post_res = await fetch("/api/memo", {
    //         method: "POST",
    //         body: JSON.stringify({content: "hello"}),
    //         headers: { "Content-Type": "application/json" }
    //     });
    //     expect(post_res.status).toBe(400);
    //     expect(post_res.statusText).toBe("title is required.");
    // })

    // test('failed_post_invalid_keys', async () => {
    //     // 不正なキーが存在する書き込み
    //     const post_res = await fetch("/api/memo", {
    //         method: "POST",
    //         body: JSON.stringify({value: "0"}),
    //         headers: { "Content-Type": "application/json" }
    //     });
    //     expect(post_res.status).toBe(400);
    //     expect(post_res.statusText).toBe("invalid keys.");
    // })

    // test('failed_get_id', async () => {
    //     // 存在しないidを指定する
    //     const get_res: any = await fetch(`/api/memo/0`);
    //     expect(get_res.status).toBe(204);
    //     expect(get_res.statusText).toBe("No Content");
    // })

    // test('failed_delete_not_found', async () => {
    //     // 書き込んだ情報を削除する
    //     const del_res = await fetch(`/api/memo/0`, {
    //         method: "DELETE",
    //     });
    //     expect(del_res.status).toBe(404);
    // })
});