import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "../contact/contact.component";
import { FormsModule } from "@angular/forms";
import { JuriNameValidator, XphrUrlValidator } from "./contact.validator"



const routes: Routes = [{ path: "", component: ContactComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
  exports: [],
  declarations: [ContactComponent, JuriNameValidator, XphrUrlValidator]
})
export class ContactModule {}
