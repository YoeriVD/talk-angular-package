# Angular

--
# Demo 

Requirements:

* search on keypress
* only search after 300ms of non-typing
* only search if the value changed (ignore type + backspace)
* minimum of 2 characters
* cancel previous search request is a new one starts

--
<!-- .slide: data-background="http://www.reactiongifs.com/r/mth.gif" -->

--
```typescript
this
    .input
    .valueChanges
    .debounceTime(300)
    .filter(v > !v || v.length > 1)
    .distinctUntilChanged()
    .switchMap(query => 
        Observable.fromPromise(this.http
                                   .get(`${this.url}?q=${query}`))
    )
    .subscribe(results => this.results = results);
```

--
<!-- .slide: data-background="http://www.reactiongifs.com/wp-content/uploads/2013/06/supa-hot-fire.gif" -->
