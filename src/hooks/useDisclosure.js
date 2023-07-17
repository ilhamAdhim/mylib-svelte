// customHook.js
import { onMount, onDestroy } from 'svelte';
import { writable } from 'svelte/store';

export function useDisclosure() {
  const isOpen = writable(false)
  const handleOpen = () => isOpen.set(true)
  const handleClose = () => isOpen.set(false)

  return { isOpen, handleClose, handleOpen}
}
