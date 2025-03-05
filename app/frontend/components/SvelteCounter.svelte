<!-- Counter -->
<script>
  let { count = $bindable(0), onCountChange = $bindable(() => {}) } = $props()

  function increment() {
    count += 1
    onCountChange(count)
  }

  function decrement() {
    count -= 1
    onCountChange(count)
  }
</script>

<div class="counter bg-gray-100 p-4 rounded">
  <h1 class="text-lg">Svelte Counter</h1>
  <button class="border rounded" onclick={increment}>Increment</button>
  <span>{count}</span>
  <button class="border rounded" onclick={decrement}>Decrement</button>
</div>
