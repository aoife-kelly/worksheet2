import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal("Week ToDo");

protected tasks=signal([
  'create test apps',
  'practice github',
  'study typescript basics'
])

protected deleteTask(index:number){
  this.tasks.update(tasks=>
    tasks.filter((_,i) => i !==index)
  );
}
}