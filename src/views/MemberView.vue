<template>
    <div id="memberView">
        <nav-bar></nav-bar>
        <end-footer></end-footer>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import EndFooter from '@/components/EndFooter.vue';
export default {
    name: 'MemberView',
    components: {NavBar, EndFooter},
    data() {
        return {
            message: '',
        };
    },
    created() {},
    methods: {},
};
</script>

<style scoped></style>