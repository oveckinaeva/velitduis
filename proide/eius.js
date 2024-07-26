let tid;

function delayedAction() {
    tid = setTimeout(() => {
        console.log("Delayed action executed");
    }, 1000);
}

function cancelDelayedAction() {
    if (tid) {
        clearTimeout(tid);
        console.log("Delayed action canceled");
    }
}

// Somewhere in your code, you might call these functions based on certain conditions:
// delayedAction(); // Start the delayed action
// cancelDelayedAction(); // Cancel the delayed action if needed
