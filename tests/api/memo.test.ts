import { describe, it, expect, test } from "vitest";
import { setup, fetch, $fetch } from '@nuxt/test-utils/e2e'
import { ExitStatus } from "typescript";

describe('api_test', async ()=>{
    await setup({
        host: 'http://localhost:3000',
    });

    test('success_post_titleonly', async () => {
        const post_res = await $fetch("/api/memo", {
            method: "POST",
            body: JSON.stringify({title: "test"}),
            headers: { "Content-Type": "application/json" }
        });
        const get_res: any = await fetch(`/api/memo/${post_res.id}`);
        const get_res_json = await get_res.json();
        expect(get_res.status).toBe(200);
        expect(get_res_json.title).toBe("test");
    });

    test('success_post', async () => {
        const post_res = await $fetch("/api/memo", {
            method: "POST",
            body: JSON.stringify({title: "test", content: "hello"}),
            headers: { "Content-Type": "application/json" }
        });
        const get_res: any = await fetch(`/api/memo/${post_res.id}`);
        const get_res_json = await get_res.json();
        expect(get_res.status).toBe(200);
        expect(get_res_json.title).toBe("test");
        expect(get_res_json.content).toBe("hello");
    });

    test('failed_post_non_title', async () => {
        const post_res = await fetch("/api/memo", {
            method: "POST",
            body: JSON.stringify({content: "hello"}),
            headers: { "Content-Type": "application/json" }
        });
        expect(post_res.status).toBe(400);
        expect(post_res.statusText).toBe("title is required.");
    })

    test('failed_post_invalid_keys', async () => {
        const post_res = await fetch("/api/memo", {
            method: "POST",
            body: JSON.stringify({value: "0"}),
            headers: { "Content-Type": "application/json" }
        });
        expect(post_res.status).toBe(400);
        expect(post_res.statusText).toBe("invalid keys.");
    })

    test('success_get_id', async () => {
        const get_res: any = await fetch(`/api/memo/1`);
        const get_res_json = await get_res.json();
        expect(get_res.status).toBe(200);
        expect(get_res_json.id).toBe(1);
        expect(get_res_json.title).toBe("first");
    })

    test('failed_get_id', async () => {
        const get_res: any = await fetch(`/api/memo/0`);
        expect(get_res.status).toBe(204);
        expect(get_res.statusText).toBe("No Content");
    })
});