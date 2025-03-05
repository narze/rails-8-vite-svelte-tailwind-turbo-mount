import { TurboMountController } from "turbo-mount"

export default class extends TurboMountController {
  static targets = ["input", "mount"]

  get componentProps() {
    return {
      ...this.propsValue,
      onCountChange: this.onCountChange,
    }
  }

  connect() {
    const input = this.inputTarget

    // Stimulus -> Svelte
    input.addEventListener("change", (e) => {
      const count = e.currentTarget.value

      // Setting propsValue forces the Svelte component to re-render
      this.propsValue = { ...this.propsValue, count }
    })
  }

  // Svelte -> Stimulus
  onCountChange = (count) => {
    console.log("onCountChange", { count })

    // Use setComponentProps does not force the Svelte component to re-render
    this.setComponentProps({ ...this.componentProps, count })
    this.inputTarget.value = count
  }
}
