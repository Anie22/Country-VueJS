<template>
    <section class="loading">
        <div class="progress">
            <div class="progress-value" :style="{ transform: `rotate(${progressDegrees}deg)` }"></div>
        </div>
        <div class="progress-holder">
            <div class="progress-text">
            {{ loadingError ? 'Check your network, error while loading data' : (loading ? 'Loading...' : dataValue) }}
            </div>
            <div class="progress-count">
            {{ formattedProgress }}
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        loading: Boolean,
        loadingError: Boolean,
        progressDegrees: Number,
        formattedProgress: String,
    },
}
</script>

<style>
    .loading{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 12px;
        padding: 20px;
        margin-top: 100px;
        width: 100%;
        height: 100%;
    }

    .progress {
        width: 120px;
        height: 120px;
        border: 10px solid var(--White);
        border-top: 10px solid #002fff;
        border-right: 10px solid #002fff;
        border-bottom: 10px solid #ff0303;
        border-left: 10px solid #ff0303;
        border-radius: 50%;
        animation: spin 2s linear infinite;
    }

    .progress-value {
        width: 100%;
        height: 100%;
        background-color: transparent;
        border-radius: 50%;
        position: absolute;
        clip: rect(0px, 50px, 100px, 0px);
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .progress-holder{
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 16px;
        font-weight: 400;
    }
</style>