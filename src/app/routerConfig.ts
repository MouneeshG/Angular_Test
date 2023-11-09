import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { Component } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


export const appRoutes : Routes = [
    {
        path: 'home',
        component : HomeComponent
    },

    {
        path: 'about',
        component : AboutComponent
    },

    {
        path: 'dashboard',
        component : DashboardComponent
    }

]