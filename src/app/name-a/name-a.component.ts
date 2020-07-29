import { Component, OnInit } from "@angular/core";
import { BridgeServiceService } from "../bridge-service.service";

@Component({
  selector: "app-name-a",
  templateUrl: "./name-a.component.html",
  styleUrls: ["./name-a.component.css"],
})
export class NameAComponent implements OnInit {
  counter: number = 0;
  constructor(private bridgeService: BridgeServiceService) {}

  ngOnInit() {}

  increaseCount() {
    this.counter += 1;
    this.bridgeService.setNumber(this.counter);
  }
}
