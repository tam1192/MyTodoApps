import { describe, it, expect, beforeEach } from "vitest";

// テストデータのセットアップ
const BASE_URL = "http://localhost:3000/api/memo";
let memoId: number;

describe("Memo API Tests", () => {
  // 初期データを登録（毎回新しいデータを追加）
  beforeEach(async () => {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "テストメモ", content: "テスト内容" }),
    });

    const data = await res.json();
    memoId = data.id;
  });

  // 🔹 POSTのテスト（正常系）
  it("should create a new memo", async () => {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "新規メモ", content: "サンプル" }),
    });

    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data.title).toBe("新規メモ");
    expect(data.content).toBe("サンプル");
  });

  // 🔹 GETのテスト（正常系）
  it("should fetch memo list", async () => {
    const res = await fetch(BASE_URL);
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.memos.length).toBeGreaterThan(0);
  });

  // 🔹 GET ID のテスト（正常系）
  it("should fetch a specific memo", async () => {
    const res = await fetch(`${BASE_URL}/${memoId}`);
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.id).toBe(memoId);
  });

  // 🔹 PUTのテスト（正常系）
  it("should update memo content", async () => {
    const res = await fetch(`${BASE_URL}/${memoId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "更新後メモ", content: "修正データ" }),
    });

    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data.title).toBe("更新後メモ");
    expect(data.content).toBe("修正データ");
  });

  // 🔹 DELETEのテスト（正常系）
  it("should delete a memo", async () => {
    const res = await fetch(`${BASE_URL}/${memoId}`, {
      method: "DELETE",
    });

    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data.message).toBe("Deleted successfully.");

    // 削除後に GET すると 404 になるか確認
    const resAfterDelete = await fetch(`${BASE_URL}/${memoId}`);
    expect(resAfterDelete.status).toBe(404);
  });

  // 🔹 POST 異常系（titleなし）
  it("should return 400 error when title is missing", async () => {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: "タイトルなし" }),
    });

    const data = await res.json();
    expect(res.status).toBe(400);
    expect(data.error.message).toBe("title is required.");
  });

  // 🔹 GET ID 異常系（存在しないID）
  it("should return 404 error when memo does not exist", async () => {
    const res = await fetch(`${BASE_URL}/999999`);
    const data = await res.json();

    expect(res.status).toBe(404);
    expect(data.error.message).toBe("Not found");
  });
});
