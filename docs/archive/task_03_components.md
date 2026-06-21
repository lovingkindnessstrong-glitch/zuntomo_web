# Task: ヘッダーとフッターのコンポーネント化

## 1. 目的
`src/layouts/Layout.astro` に直接記述されているヘッダー部分とフッター部分を、それぞれ独立したAstroコンポーネントとして切り出し、コードの可読性と保守性を向上させる。

## 2. 実装ステップ
1. `src/components/` ディレクトリを作成する（存在しない場合）。
2. `src/components/Header.astro` を作成し、`Layout.astro` からヘッダーのHTMLコード（`<header>`タグやナビゲーション部分など）を移行する。
3. `src/components/Footer.astro` を作成し、`Layout.astro` からフッターのHTMLコード（`<footer>`タグなど）を移行する。
4. `src/layouts/Layout.astro` 内で `Header.astro` と `Footer.astro` をインポートし、元の位置に配置する。
5. 切り出しによって、画像パスやCSSの適用状態が崩れていないか確認する。

## 3. 完了条件 (DoD)
- `npm run build` がエラーなく完了すること。
- ブラウザでトップページ（`/`）およびキッズページ（`/kids/`）を確認し、ヘッダーとフッターの表示が以前と全く変わっていないこと。
- 完了後、このタスクファイルを `docs/archive/` に移動させること。