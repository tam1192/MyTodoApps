import { describe, it, expect, test } from "vitest";
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('api_test', async ()=>{
    await setup({
        host: 'http://localhost:3000',
    });

    test('success_post_test', async () => {
        const post_res = await $fetch("/api/memo", {
            method: "POST",
            body: JSON.stringify({title: "test"}),
            headers: { "Content-Type": "application/json" }
        });
        const get_res: any = await $fetch(`/api/memo/${post_res.id}`);
        expect(get_res.title).toBe("test");
    });
});