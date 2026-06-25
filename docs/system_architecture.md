# ズンとも 公式サイト基本設計書 (System Architecture)

## 1. サイト論理階層・システム構造（確定版）

```mermaid
graph TD
    %% 論理階層（ツリー構造）
    Home[HOME / <br>index.astro]
    
    %% トップページ内のセクション（アンカー）
    Lesson_Anchor((LESSON エリア<br> /#lesson ))
    
    %% キュレーションページ（未設計 / PEND）
    News_Pend[NEWS / <br>news/index.astro<br>※PEND/未設計]
    Library_Pend[LIBRARY / <br>library/index.astro<br>※PEND/未設計]
    
    %% ホームからの導線
    Home --> Lesson_Anchor
    Home --> News_Pend
    Home --> Library_Pend
    
    %% LESSON内の個別ページ
    Lesson_Anchor --> Standard[STANDARD / <br>activities/standard/index.astro]
    Lesson_Anchor --> Kids[KIDS / <br>activities/kids/index.astro]
    Lesson_Anchor --> Gold[GOLD / <br>activities/gold/index.astro]
    Lesson_Anchor --> Salsa[SALSA / <br>activities/salsa/index.astro]
    Lesson_Anchor --> Neko[NEKO / <br>activities/neko-odori/index.astro]

    %% 共通レイアウト構造
    subgraph Layout_System [共通レイアウト構造]
        Header[Header.astro]
        Footer[Footer.astro]
        Breadcrumb[Breadcrumb.astro]
    end

    Home -.-> Layout_System
    Standard -.-> Layout_System
    Kids -.-> Layout_System
    Gold -.-> Layout_System
    Salsa -.-> Layout_System
    Neko -.-> Layout_System
    News_Pend -.-> Layout_System
    Library_Pend -.-> Layout_System

    classDef top fill:#fff9c4,stroke:#fbc02d,stroke-width:2px;
    classDef second fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px;
    classDef anchor fill:#e1f5fe,stroke:#0277bd,stroke-width:2px,stroke-dasharray: 5 5;
    classDef pend fill:#f1f5f9,stroke:#64748b,stroke-width:2px,stroke-dasharray: 5 5;
    classDef comp fill:#ffffff,stroke:#94a3b8,stroke-width:1px,stroke-dasharray: 5 5;
    
    class Home top;
    class Standard,Kids,Gold,Salsa,Neko second;
    class Lesson_Anchor anchor;
    class News_Pend,Library_Pend pend;
    class Header,Footer,Breadcrumb comp;