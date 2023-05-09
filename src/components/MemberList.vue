<template>
    <body>
        <main id="main">
            <section class="blog">
                <div class="container">
                    <div id="tboard">
                    <h1>회원목록</h1>
                    <table>   
                    <thead>
                        <tr>
                            <th>아이디</th>
                            <th>닉네임</th>
                            <th>비밀번호</th>
                            <th>이메일아이디</th>
                            <th>이메일도메인</th>
                            <th>전화번호</th>
                            
                            <th>생성날짜</th>
                            <th>수정날짜</th>
                            
                            <th>사용자역할</th>
                            
                            <th>수정/삭제</th>
                        </tr>
                    </thead>                                 
                    <tbody>
                        <tr v-for="(member, index) in members" :key="member.MemberId">
                            <td v-text="index + 1"></td>
                            <td v-text="member.MemberId" v-on:click="memberDetail(member.memberId)"></td>
                            <td v-text="member.password"></td>
                            <td v-text="member.nickname"></td>
                            <td v-text="member.emailId"></td>
                            <td v-text="member.emailDomain"></td>
                            <td v-text="member.phoneNumber"></td>

                            <td v-text="member.createdAt"></td>
                            <td v-text="member.modifiedAt"></td>

                            <td v-text="member.memberRole"></td>
                            <td>
                            <div style="float: right">
                            <button type="button" class="btn btn-primary" v-on:click="memberUpdate(member.memberId)">수정</button>
                            <button type="button" class="btn btn-danger" v-on:click="memberDelete(member.memberId)">삭제</button>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    </div>
                </div>
            </section>
        </main>
    </body>
</template>

<script>
import http from "@/api/http.js";
export default {
    name: 'MemberList',
    data() {
        return {
            members: [], // members에 list넣어줌
        };
    },
    created() {
        this.memberList();
    },
    methods: {
        memberList(){
            http
            .get("/member/memberlist")
            .then(({data}) => {
                console.log(data)
                this.members = data;
            })
            .catch((error) => {
            console.log(error);
        });
        },
        memberDetail(memberId){
            this.$router.push(`/member/memberdetail/${memberId}`)
        },
        memberUpdate(memberId){
            this.$router.push(`/member/memberupdate/${memberId}`)
        }
    },
};
</script>
<style></style>