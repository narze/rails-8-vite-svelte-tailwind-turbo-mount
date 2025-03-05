<!-- Counter -->
<script>
  let { count = $bindable(0) } = $props()

  function increment() {
    count += 1
  }

  function decrement() {
    count -= 1
  }
</script>

<div class="counter">
  <h1 class="text-lg">Svelte Counter</h1>
  <button class="border rounded" onclick={increment}>Increment</button>
  <span>{count}</span>
  <button class="border rounded" onclick={decrement}>Decrement</button>
</div>
