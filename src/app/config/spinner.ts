import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
@Injectable()
export class mySpinnerClass {
    constructor(private snakeBar: MatSnackBar) { }
    openSnake(message:string, messageData:string) {
        this.snakeBar.open(message, messageData, {
            duration: 4000,
        });
    }
 }