<script setup></script>

<style scoped>
@keyframes growShrink {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.25);
    }
}

.logo-animation {
    animation: growShrink 3s ease-in-out infinite;
}
</style>

<template>
    <div class="min-h-screen flex flex-col">
        <div class="flex-grow flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-950">
            <div class="text-center text-white px-6 py-12 max-w-lg w-full">
                <img src="/images/logo.png" alt="Logo" class="mb-6 w-32 md:w-48 mx-auto logo-animation" />

                <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-300 font-anton">
                    COMING SOON!
                </h2>

                <p class="text-sm sm:text-lg md:text-xl font-light mb-8 font-anton text-gray-400">
                    Cybersecurity student and self-taught full-stack developer focused on
                    building secure, functional, and beautifully designed systems. This site
                    will serve as a portfolio and about me page.
                </p>

                <UButton class="font-anton" to="https://github.com/FriedWingis" target="_blank"
                    icon="i-simple-icons-github" color="gray" variant="ghost">GitHub</UButton>
            </div>
        </div>

        <footer class="w-full bg-gray-950 text-center py-4 text-white font-anton">
            <p class="text-sm font-light">
                &copy; 2024 - Designed and developed by Fried
            </p>
        </footer>
    </div>
</template>
