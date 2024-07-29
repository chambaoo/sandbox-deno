import { Task } from "./task.ts";
// import { Assignee } from "./assignee.ts";

console.log("ここに出力");

const mockTasks: Task[] = [
  {
    id: 1,
    title: "プロジェクト計画書の作成",
    description: "次期プロジェクトの計画書を作成する",
    assignee: "浅田",
    // startDate: new Date("2024-08-01"),
    // endDate: new Date("2024-08-15"),
  },
  {
    id: 2,
    title: "クライアントミーティング",
    description: "新規クライアントとの初回ミーティングを行う",
    assignee: "中島",
    startDate: new Date("2024-08-09"),
    endDate: new Date("2024-08-10"),
  },
  {
    id: 3,
    title: "コードレビュー",
    description: "チームメンバーのコードをレビューする",
    assignee: "豊田",
    startDate: new Date("2024-07-28"),
    endDate: new Date("2024-07-30"),
  },
];

mockTasks.map((x) => {
    console.log(x.title, '\t',
        x.assignee ?? 'N/A', '\t',
        x.startDate?.toLocaleDateString() ?? 'N/A', '\t',
        x.endDate?.toLocaleDateString() ?? 'N/A', '\t',
    );
})

