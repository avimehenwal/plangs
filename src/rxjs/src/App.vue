<template>
  <div id="app">
    <h1>hello</h1>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script>
import { Observable } from "rxjs";

export default {
  name: "App",
  data: () => ({
    count: 0,
  }),
  created() {
    // new number is emitted every second or the # you specify here
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log("just before subscribe");
    observable.subscribe({
      next(x) {
        this.count = x
        console.log("got value " + x);
      },
      error(err) {
        console.error("something wrong occurred: " + err);
      },
      complete() {
        console.log("done");
      },
    });
    console.log("just after subscribe");
  },
};
</script>

<style>
</style>
