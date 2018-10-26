import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  InfoList: NameInfo[] = [];
  CacheList: NameInfo[] = [];

  CurrentItem: NameInfo;

  ngOnInit(): void {
    this.CurrentItem = new NameInfo();
  }

  EditThenPush(): void {
    if (this.CurrentItem) {
      this.InfoList.push(this.CurrentItem.clone());
      this.CacheList.push(this.CurrentItem.clone());
    }
  }

  EditItem(item: NameInfo, index: number) {
    this.InfoList[index].Name = item.Name;
    this.InfoList[index].Age = item.Age;
  }
}

export class NameInfo {
  Name: string;
  Age: number;

  clone(): NameInfo {
    let clone = new NameInfo();
    clone.Name = this.Name;
    clone.Age = this.Age;
    return clone;
  }

  toString(): string {
    return  `${this.Name}, ${this.Age};`;
  }
}