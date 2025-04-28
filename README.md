# AngularClock
A simple analogue Clock (and additional Digital time under the clock) to watch the time made with Angular, Tailwind CSS and Local Date/Time so no server needed.  

### Usage
I added the Clock to the `app.component.html` and to style it I used Tailwind CSS. This would place the watch in the top middle of your screen.  

```html
  <div class="absolute top-10 left-1/2 transform -translate-x-1/2 z-20">
    <app-clock></app-clock>
  </div>
```

### Config
To style the watch you can just change the the width and height of the circle in the first div.  
To style the clock hands you can also change the width and height or color in the respective div's
