// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const defaultGift: GiftData = {
  name: "Habiby",                                     // اسم مستلم الهدية
  senderName: "your love",                            // التوقيع في آخر الرسالة (اختياري)
  envelopeImage: "/images/envelope-aya.png",          // صورة الظرف
  birthdayImage: "/images/birthday-aya.png",          // صورة الهدية النهائية
  accentColor: "#38bdf8",                             // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
  musicUrl: "",                                       // رابط الموسيقى هنا
  message: `قطتيي كبرت سنه بجد مش عارفه اقولك ايه ولا اوصفلك قد ايه انت غالي عندي بس كل اللي اعرفه إن من يوم ماعرفتك وانت بقيت جزء كبير من حياتي إنت عوضتني عن حاجات كتير من غير متحس وكنت سبب في حاجات حلوه كتير في حياتي ووجودك لوحده بيفرق معايا اكتر مما تتخيل بحبك اوي وبحب انك جزء من ذكرياتي وبحب كل لحظه حلوه بينا حتي لو كانت بسيطه حبيت اكون اول شخص يقولك كل عام وانت بخير يا عمري عيد ميلاد سعيد يا اوسي ربنا يبعد عنك كل هم وضيق انت تستاهل كل حاجه حلوه في الدنيا دي يارب اشوفك مبسوط دايما ولو فيوم لقيت نفسك بتفتكر الايام الحلوه افتكرني معاها وافتكر ان في حد بيحب يشوفك مبسوط دايما ان شاء اللّه ايامك كلها سعاده وعيونك الحلوه م تشوف غير السعاده ربنا يخليك ليا ياحياتي وم يحرمني منك`,
};

const giftData: Record<string, GiftData> = {
  ahmed: defaultGift,
  aya: defaultGift,
};

export default giftData;