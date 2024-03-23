<template>
    <div>
        <div class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <NuxtLink class="modal-close" to="/projects">×</NuxtLink>
                    <h1>Front-end challenges</h1>
                </div>
                <div class="modalbody-container">
                    <div class="col-lg-8 mx-auto">
                        <div class="text centered spacing">
                            <h3>To challenge myself I sometimes build small things. Front-end mentor is a platform that
                                offers challenges for front-end developers.
                            </h3>
                            <a target="__blank" href="https://www.frontendmentor.io/profile/RickvWijk1">Check it out
                                here</a>
                            <img class="centered" src="~/assets/img/projects/frontend_mentor/frontend_mentor.png"
                                width="900px" height="100px" alt="">

                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <NuxtLink to="/projects"><button class="btnModalClose bntModalClose-bg-color">Close</button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
export default {

}

</script>

<style scoped>
@import '~/assets/css/modal.css';

.text a {
    outline: unset;
    text-decoration: underline;
}
</style>