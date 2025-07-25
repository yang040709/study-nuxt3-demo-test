<script setup>
useHead({
  title: "孩子页面",
  meta: [
    { name: "description", content: "这是孩子页面" },
    { name: "keywords", content: "这是孩子页面的关键词" },
  ],
  bodyAttrs: {
    class: "child",
  },
  script: [
    {
      innerHTML: "console.log('这是子页面')",
    },
  ],
});

useSeoMeta({
  title: "产品详情页",
  description: "最新产品信息及购买指南",
  ogTitle: "限时优惠：产品名称", // 自动转换为 <meta property="og:title">
  ogImage: "/social-preview.jpg",
  twitterCard: "summary_large_image",
  canonical: "https://example.com/product", // 规范链接
});

definePageMeta({
  title: "HHHHHHa",
  pageTransition: {
    name: "rotate",
  },
});

/* 

interface MetaObject {
  title?: string
  titleTemplate?: string | ((title?: string) => string)
  templateParams?: Record<string, string | Record<string, string>>
  base?: Base
  link?: Link[]
  meta?: Meta[]
  style?: Style[]
  script?: Script[]
  noscript?: Noscript[];
  htmlAttrs?: HtmlAttributes;
  bodyAttrs?: BodyAttributes;
}

*/

// console.log("seoMeta", seoMeta);

const { name, setName } = useName();

const handleInput = (e) => {
  setName(e.target.value);
};
</script>

<template>
  <div class="container">
    <h2>seo head的设置</h2>
    <!-- <Head>
      <Title>123</Title>
      <Meta name="description" content="123" />
      <Style> body { background-color: green; } </Style>
    </Head> -->
    <div>
      <input type="text" @input="handleInput" />
    </div>
    <div>name==>{{ name }}</div>
  </div>
</template>

<style scoped></style>
