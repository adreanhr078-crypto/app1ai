# نقطة استئناف G0 — 2026-09-11

حُفظت بطلب المالك لفتح شات جديد. هذه مذكرة حالة تنفيذ، وليست اعتماداً بصرياً أو تغييراً للـCanon.

## اقرأ أولاً

- `AGENT_RULES.md` و`docs/PROJECT_VISION.md` و`docs/project-memory.json` وmanifest السرد المعتمد.
- `PROJECT_MASTER_BLUEPRINT_2026-09-11.ar.md` في هذا المجلد هو خطة الإنتاج المعتمدة.
- `ANTIGRAVITY_WORK_AUDIT_2026-09-11.ar.md` يسجل مراجعة عمل Antigravity.

## آخر قرارات المالك

- استكمال G0 / Vertical Slice Foundation فقط؛ لا عالم مفتوح ولا محتوى كبير ولا مهام كبيرة.
- Echo واحد، حركة وكاميرا وتفاعل أساسي، ومساحة اختبار صغيرة من Sector 11.
- المسار الإلزامي: VRoid Studio → تنقيح فني في Blender → GLB → Godot. يسمح بتعديل نموذج جاهز، مع توثيق شروطه ومطابقته للمانهوا.
- الجودة أهم من السرعة. سجل العمل والمشكلات والأدلة بعد كل خطوة؛ لا تتجاوز بوابة فاشلة.
- Antigravity للمهام البسيطة القابلة للتحقق فقط. لا تستأنف تدقيق محادثاته أو تخطيطه الآن، ولا تفوض إليه القرار الفني أو التنفيذ الأساسي.
- يسمح بقتال وقتل بشري قبل التحول بلا قدرات Zero؛ هذا لا يفتح نظام القتال ضمن G0.
- EX-011 مباشرة على الجلد؛ تحول Zero يضيف طبقة ولا يستبدل العلامة.

## ما تم تنفيذه

المشروع التجريبي: `artifacts/eleven-eleven/art/godot/technical-proofs/sector-11-foundation/`.

- project.godot وهيكل scenes/scripts/assets/contracts.
- CharacterBody3D للحركة المرتبطة بالكاميرا، كاميرا منظور ثالث، تفاعل أساسي، واجهة اختبار، قياس frame time.
- غرفة إجرائية صغيرة مع فصل المجسمات المرئية عن التصادم، إضاءة، وثلاث نقاط تفاعل.
- Session bridge تجريبي TEST_ONLY لا يمنح مكافآت ولا يملك تقدم القصة أو الحفظ.
- عقود launch context/player command/authoritative state.
- أدوات التشغيل في `tools/godot/run-godot.ts`: foundation-import/test/smoke/run، مع npm scripts مقابلة.
- مواءمة manifest الأدوات ودليل HYBRID_PRODUCTION_TOOLCHAIN مع Godot كهدف إنتاج مشروط وThree/R3F كمرجع مؤقت.

## نتائج الاختبارات المسجلة سابقاً

هذه نتائج هذه الجلسة وليست اختبارات أُعيدت عند كتابة المذكرة:

- `npm run godot:typecheck`: PASS.
- `npm run godot:test`: 4/4 PASS.
- `npm run godot:doctor`: Godot 4.7.2.
- `npm run godot:foundation:import`: PASS.
- `npm run godot:foundation:test`: FOUNDATION_TESTS_PASS.
- `npm run godot:foundation:smoke`: FOUNDATION_SMOKE_OK.
- GLB الإجرائي: Khronos validator بلا errors/warnings، 11,532 مثلثاً، 7,032 vertices، 29 primitives، 9 materials، صفر textures، 5 animations، حتى 20 joints.
- فحص بنية Blender نجح؛ المطابقة البصرية والـskinning غير معتمدين.

## الجودة الفعلية ونقطة التوقف

**G0 غير مكتمل وغير مجتاز بصرياً.** المشهد المرئي السابق أظهر مشكلة حجم/تموضع/كاميرا، إذ ملأ الجذع الوردي الشاشة. لا تعتبر نجاح headless دليلاً على جودة اللعب.

`assets/characters/echo/echo_foundation_v1.glb` هو NON_CANON_TECHNICAL_PLACEHOLDER، مرفوض كهوية نهائية. لا تعِد تقديمه للمالك على أنه Echo عالي الجودة.

لا توجد نسبة AAA مقاسة وصالحة بعد؛ يلزم تقييم بصري وحركي وأداء حقيقي. لا تخترع نسبة بناءً على عدد الملفات أو نجاح الاختبارات.

## VRoid

- التطبيق المثبت: `C:/Users/yasmo/AppData/Local/Programs/VRoidStudio/2.14.0/VRoidStudio.exe`.
- تم اختيار sample ذكر بشعر داكن وسترة رمادية/سوداء وتعديل preset الوجه. هذا base فقط، وليس تطابقاً مع Echo.
- الملف الأصلي المحفوظ: `C:/Users/yasmo/OneDrive/Documents/model.vroid`.
- نسخة المشروع: `artifacts/eleven-eleven/art/production/echo-vroid-foundation/source/Echo_Foundation_v0.vroid`.
- التصدير أظهر 30,710 polygons و14 materials و113 bones.
- **لم يثبت إنشاء أي ملف VRM.** لم يكتمل مسار VRoid→Blender→Godot.
- تكررت صور واجهة ناقصة/بيضاء أثناء التصدير؛ سجل VRoid أظهر تحذيرات حجم layout سالب. تفسير أن سطح المكتب الافتراضي هو السبب غير مثبت، فلا تسجله كسبب جذري مؤكد.
- أُعيد تشغيل VRoid؛ آخر نافذة شوهدت تعرض model.vroid في محرر الوجه، بحجم نافذة 1600×1800. لا تعتمد PID قديماً؛ أعد اكتشاف النافذة.
- شروط sample تحتاج توثيقاً خاصاً؛ لا تفترض CC0. راجع https://vroid.pixiv.help/hc/en-us/articles/4402394424089-VRoidPreset-A-Z قبل اعتماد التوزيع.

## عائق Computer Use

اقرأ مهارة computer-use الرسمية قبل التحكم، واستعمل `@oai/sky` عبر `mcp__node_repl__js`.

تم اكتشاف الأداة ونجح استيراد sky، لكن `sky.list_windows()` فشل مرتين بـ:
`Computer Use native pipe is unavailable: failed to connect native pipe: The system cannot find the file specified. (os error 2)`.

أُبلغ المالك بإعادة تفعيل الاتصال. لا تكرر حلقات PowerShell/PrintWindow/النقرات التي استهلكت الوقت، ولا تفترض أن صور PrintWindow القديمة تثبت حالة الواجهة الحالية. لا تبدّل Desktop 1/2 عشوائياً؛ المستخدم قد يعمل على Desktop 2.

## ComfyUI / Antigravity

- أوقفنا Astra_Automated_Pipeline.ps1؛ run_echo_generation.py لا يرسل أي POST رغم ادعاء إنتاج 7 صور، لذا لا تشغله بوصفه pipeline ناجحاً.
- احتُفظ بوزني Animagine XL 3.1 وIPAdapter المكتملين؛ تحقق SHA-256 مقابل Hugging Face نجح. التفاصيل في تقرير التدقيق.
- CLIP Vision كان صفراً عند الفحص. لا تعتبر ComfyUI جاهزاً حتى اكتمال manifest التراخيص والأوزان واختبار workflow قابل للتكرار.
- صور Antigravity الثلاث مرشحات مزاج غير Canon، لا turnaround ولا character lock.

## Git وحفظ العمل

- عند بدء حفظ المذكرة، HEAD كان ضمن العمل المرفوع سابقاً إلى main، وآخر commit معروف `506047d6`؛ لا تفترض من أنشأ commit دون دليل.
- تغييرات Godot وملف VRoid موجودة في commit سابق `e652c757`؛ لا تنشئ مشروعاً مكرراً.
- تقرير تدقيق Antigravity وهذه المذكرة وتحديثات الذاكرة محفوظة محلياً؛ لم يُطلب commit/push في طلب حفظ هذه الجلسة.
- راجع git status قبل أي تعديل، واحفظ العمل الموجود.

## أول خطوات الشات الجديد

1. اقرأ هذه المذكرة والـBlueprint، وتحقق من حالة الملفات وComputer Use مرة واحدة وفق recovery المهارة.
2. أكمل VRM من VRoid بعد استعادة الاتصال، ووثق المصدر وشروط sample. لا تعِد صنع base من الصفر بلا سبب.
3. ابحث عن إضافة VRM المحلية لبلندر قبل تنزيل بديل. فحصها لم يكتمل في هذه الجلسة.
4. نفذ تنقيح Echo في Blender وفق صفحات المانهوا: الوجه، الشعر، الملابس، EX-011، rig/weights، ثم GLB موثق.
5. أصلح الحجم والكاميرا في Godot واختبر الحركة والتفاعل في الغرفة فقط.
6. نفذ بوابة الجودة المطلوبة وسجل PASS/FAIL/UNVERIFIED بوضوح. لا تنتقل إلى العالم المفتوح.
