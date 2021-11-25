import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FilterPipe } from "../filter.pipe";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-directory",
  templateUrl: "./directory.component.html",
  styleUrls: ["./directory.component.css"]
})
export class DirectoryComponent implements OnInit {
  ninjas = [
    { name: "Dark Prince", belt: "black" },
    { name: "", belt: "red" },
    { name: "P.E.K.K.A", belt: "purple" }
  ];
  constructor(private logger: LoggingService) {}

  logIt() {
    this.logger.log();
  }
  ngOnInit() {}
}
