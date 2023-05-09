<template>
    <!--로그인 modal start-->
    <div
      class="modal fade"
      id="signInModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Sign In</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form id="form-login" method="post">
            <div class="modal-body">
              <div class="form-outline mb-4">
                <label for="user_id">ID</label>
      			<input type="text" class="form-control" id="memberId" placeholder="Enter Id" name="memberId">
              </div>
              
              <div class="form-outline mb-4">
              <label for="user_password">Password</label>
      			<input type="password" class="form-control" id="password" placeholder="Enter Password" name="password">
              </div>
            </div>
	          <div class="modal-footer">
	            <a href='${root}/member/findById'>forget password?</a>&nbsp;&nbsp;
	            <button type="button"
                 class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  >Close</button>
	            <button type="button" class="btn btn-primary"
                 id="btn-login"
                 v-on:click="login">Log In</button>
	          </div>
          </form>
        </div>
      </div>
    </div>
    <!--로그인 modal end-->
</template>

<script>
var btnlogin = new Vue({
    el: '#btn-login',
    data:{

    },
    methods:{
        login(){

        }
    }
})
export default {
    name: "LoginModal",
};
	  document.querySelector("#btn-login").addEventListener("click", function () {
	        if (!document.querySelector("#memberId").value) {
	          alert("아이디 입력!!");
	          return;
	        } else if (!document.querySelector("#password").value) {
	          alert("비밀번호 입력!!");
	          return;
	        } else {
	          let form = document.querySelector("#form-login");
	          form.setAttribute("action", "${root}/member/login");
	          form.submit();
	        }
	      });
</script>

<style scoped></style>