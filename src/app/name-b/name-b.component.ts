import { Component, OnInit, OnDestroy } from "@angular/core";
import { BridgeServiceService } from "../bridge-service.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-name-b",
  templateUrl: "./name-b.component.html",
  styleUrls: ["./name-b.component.css"],
})
export class NameBComponent implements OnInit, OnDestroy {
  counterSubscription$: Subscription;
  counter: number = 0;
  constructor(private bridgeService: BridgeServiceService) {}

  ngOnInit() {
    this.counterSubscription$ = this.bridgeService
      .getNumber()
      .subscribe((counterValue) => {
        this.counter = counterValue;
        console.log("counterValue", counterValue);
      });
  }

  ngOnDestroy() {
    if (this.counterSubscription$) {
      this.counterSubscription$.unsubscribe();
    }
  }
}
