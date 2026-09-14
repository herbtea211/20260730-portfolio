import WorkPage from "@/components/shell/WorkPage";
import WorkHero from "@/components/sections/workHero";
import WorkSectionTitle from "@/components/sections/WorkSectionTitle";
import WorkSectionSubtitle from "@/components/sections/WorkSectionSubtitle";
import Image from "next/image";
import Bullet from "@/components/ui/Bullet"
import recipe01 from "@/assets/image/Work/recipe/recipe-01.png";
import recipe02 from "@/assets/image/Work/recipe/recipe-02.png";
import recipe03 from "@/assets/image/Work/recipe/recipe-03.png";
import recipe04 from "@/assets/image/Work/recipe/recipe-04.png";
import recipe05 from "@/assets/image/Work/recipe/recipe-05.png";
import recipe06 from "@/assets/image/Work/recipe/recipe-06.png";
import recipe07 from "@/assets/image/Work/recipe/recipe-07.png";
import recipe08 from "@/assets/image/Work/recipe/recipe-08.png";


export default function Page() {
  return (
    <WorkPage>
      <WorkHero
        title="配配方"
        subtitle="配方管理應用程式"
        role="Product Designer / IOS Mobile"
        description={
          <>
            實務餐飲工作中的配方、採買與成本管理，經常用人工或簡易工具計算，造成大量時間浪費。
            <br />
            配配方是一個針對餐飲工作者設計的 Recipe Management Application，將配方管理、份量換算與採買需求整合在同一個工作流程中，有效縮短時間，專注在更有價值的工作上。
          </>
        }
      />
      <section className="col-start-2 col-span-6 pb-40">
        <WorkSectionTitle>01 基礎功能</WorkSectionTitle>
        <WorkSectionSubtitle>||新增配方</WorkSectionSubtitle>

        <Image
          src={recipe01}
          alt="新增配方功能畫面"
        />
      </section>
      <section className="col-start-2 col-span-6 pb-40">
        <WorkSectionTitle>02 專案概述</WorkSectionTitle>
        <WorkSectionSubtitle>|| Background</WorkSectionSubtitle>

        <p className="pb-3">
          參與兩段不同規模的餐飲現場，透過實際執行下列工作項目，觀察潛在問題。
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <Image
              src={recipe02}
              alt="餐飲工作經驗與工作項目"
            />
            <div className="mt-8">
              <ul>
                  <li
                      className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                  >
                      <Bullet />配方換算
                  </li>
                  <li
                      className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                  >
                      <Bullet />成本計算
                  </li>
                  <li
                      className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                  >
                      <Bullet />原料採購
                  </li>
              </ul>
            </div>
          </div>
          <div>
            <Image
              src={recipe03}
              alt="餐飲工作經驗與工作項目"
            />
            <div className="mt-8">
              <ul>
                  <li
                      className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                  >
                      <Bullet />每日備料
                  </li>
                  <li
                      className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                  >
                      <Bullet />餐點製作
                  </li>
                  <li
                      className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                  >
                      <Bullet />製作量判斷
                  </li>
                  <li
                      className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                  >
                      <Bullet />原料需求估算
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="col-start-2 col-span-6 pb-40">
        <WorkSectionTitle>03 痛點</WorkSectionTitle>
        <ul className="pb-8">
          <li
            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
          >
            <Bullet />長期習慣固定倍率備餐，遇到緊急情況反應時間過長
          </li>
          <li
            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
          >
            <Bullet />採購量很難精準計算，造成庫存成本增加
          </li>
          <li
            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
          >
            <Bullet />季度大盤點非常困難，半成品難以回推用料
          </li>
        </ul>
        <Image
          src={recipe04}
          alt="原料總需求"
        />
      </section>
      <section className="col-start-2 col-span-6 pb-40">
        <WorkSectionTitle>04 產品策略</WorkSectionTitle>

        <WorkSectionSubtitle>
          從數位配方開始，建立動態的廚房運作系統
        </WorkSectionSubtitle>

        <WorkSectionSubtitle>|| 01．動態換算</WorkSectionSubtitle>
        <ul className="pb-8">
          <li
            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
          >
            <Bullet />依需求自動換算，不受固定倍率限制。
          </li>
        </ul>
        <WorkSectionSubtitle>|| 02．物料規劃</WorkSectionSubtitle>
        <ul className="pb-8">
          <li
            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
          >
            <Bullet />逐步建立需求、製作量、原料與採購之間的可計算關係。
          </li>
        </ul>
        <Image
          src={recipe05}
          alt="物料規劃"
        />
      </section>
      <section className="col-start-2 col-span-6">
        <WorkSectionTitle>05 解決方案</WorkSectionTitle>

        <WorkSectionSubtitle>|| 固定配方，動態換算</WorkSectionSubtitle>

        <ul className="pb-10">
          <li
            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
          >
            <Bullet />逐步建立需求、製作量、原料與採購之間的可計算關係。
          </li>
        </ul>

        <Image
          src={recipe06}
          alt="固定配方，動態換算"
        />

        <div className="flex items-center justify-center gap-3 py-20">
          <Image
            src={recipe08}
            alt=""
          />
          <p className="text-subContent leading-subContent tracking-subContent">長期習慣<span className="text-textPrimaryColor">固定倍率備餐</span>，遇到<span className="text-textPrimaryColor">緊急情況反應時間過長</span></p>
        </div>

        <WorkSectionSubtitle>|| 選擇成品，一鍵生成採購清單</WorkSectionSubtitle>

        <ul className="pb-10">
          <li
            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
          >
            <Bullet />照清單採購最精簡物料
          </li>
        </ul>


        <Image
          src={recipe07}
          alt="選擇成品，一鍵生成採購清單"
        />

        <div className="flex items-start justify-center gap-3 pt-20 pb-4">
          <Image
            src={recipe08}
            alt=""
          />
          <p className="text-subContent leading-subContent tracking-subContent"><span className="text-textPrimaryColor">採購量</span>很難精準計算，造成<span className="text-textPrimaryColor">庫存成本</span>增加</p>
        </div>

        <div className="flex items-start justify-center gap-3 pb-20">
          <Image
            src={recipe08}
            alt=""
          />
          <p className="text-subContent leading-subContent tracking-subContent">季度大<span className="text-textPrimaryColor">盤點</span>非常困難，半成品難以<span className="text-textPrimaryColor">回推用料</span></p>
        </div>
      </section>
      <section className="col-start-2 col-span-6 pb-40">
        <WorkSectionTitle>06 關鍵學習</WorkSectionTitle>

        <p className="text-textPrimaryColor pb-10">從 0 到 1 打造產品，實際體驗對於挖掘痛點、建立可落地產品非常有幫助。</p>

        <WorkSectionSubtitle>|| 實際體驗</WorkSectionSubtitle>
        <ul className="pb-10">
          <li
            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
          >
            <Bullet />表面需求 → 各工作節點觀察
          </li>
        </ul>

        <WorkSectionSubtitle>|| 挖掘痛點</WorkSectionSubtitle>
        <ul className="pb-10">
          <li
            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
          >
            <Bullet />洞察問題 → 解決方案 → 單一功能 → 完整系統
          </li>
        </ul>

        <WorkSectionSubtitle>|| 產品落地</WorkSectionSubtitle>
        <ul className="pb-10">
          <li
            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
          >
            <Bullet />規劃資訊架構與核心流程
          </li>
          <li
            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
          >
            <Bullet />建立 Design System
          </li>

          <li
            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
          >
            <Bullet />完成核心 UX / UI Design
          </li>

          <li
            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
          >
            <Bullet />持續規劃後續產品發展
          </li>
        </ul>
      </section>
    </WorkPage>
  );
}