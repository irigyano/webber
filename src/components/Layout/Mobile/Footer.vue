<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SignOutButton from '@/components/SignOutButton.vue'
import { useUserStore } from '@/stores/user'
import PostAvatar from '@/components/UserAvatar.vue'
import { Home, Search } from 'lucide-vue-next'
import FooterItem from '@/components/Layout/Mobile/FooterItem.vue'
import PostSubmissionDialog from '@/components/PostSubmission/PostSubmissionDialog.vue'
const userStore = useUserStore()
</script>

<template>
  <div
    class="fixed bottom-0 w-full flex sm:hidden border-t-[1px] border-border items-center bg-background py-2"
  >
    <FooterItem>
      <PostAvatar :avatar="userStore.user.avatar" :tag="userStore.user.tag" />
    </FooterItem>

    <FooterItem>
      <RouterLink to="/">
        <Home />
      </RouterLink>
    </FooterItem>

    <FooterItem>
      <RouterLink to="/search">
        <Search />
      </RouterLink>
    </FooterItem>

    <FooterItem>
      <SignOutButton />
    </FooterItem>

    <div class="absolute right-5 top-0 -translate-y-[150%]">
      <PostSubmissionDialog />
    </div>
  </div>
</template>
