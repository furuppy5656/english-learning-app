// フレーズデータを直接定義
let phrasesData = [
    // ミーティング開始・挨拶 (1-20)
    {
        english: "Let's get started with today's meeting.",
        japanese: "今日の会議を始めましょう。",
        pronunciation: "レッツ ゲット スターテッド ウィズ トゥデイズ ミーティング"
    },
    {
        english: "Thank you all for joining today.",
        japanese: "本日はご参加いただきありがとうございます。",
        pronunciation: "サンキュー オール フォー ジョイニング トゥデイ"
    },
    {
        english: "Good morning everyone.",
        japanese: "皆さんおはようございます。",
        pronunciation: "グッド モーニング エブリワン"
    },
    {
        english: "I hope everyone is doing well.",
        japanese: "皆さんお元気でいらっしゃることを願います。",
        pronunciation: "アイ ホープ エブリワン イズ ドゥーイング ウェル"
    },
    {
        english: "Let me introduce myself briefly.",
        japanese: "簡単に自己紹介させてください。",
        pronunciation: "レット ミー イントロデュース マイセルフ ブリーフリー"
    },
    {
        english: "Nice to meet you all.",
        japanese: "皆さんにお会いできて嬉しいです。",
        pronunciation: "ナイス トゥ ミート ユー オール"
    },
    {
        english: "I'm calling from the Tokyo office.",
        japanese: "東京オフィスから参加しています。",
        pronunciation: "アイム コーリング フロム ザ トーキョー オフィス"
    },
    {
        english: "Can everyone hear me clearly?",
        japanese: "皆さん私の声ははっきり聞こえますか？",
        pronunciation: "キャン エブリワン ヒア ミー クリアリー"
    },
    {
        english: "Let me share my screen.",
        japanese: "画面を共有させてください。",
        pronunciation: "レット ミー シェア マイ スクリーン"
    },
    {
        english: "Can everyone see my screen?",
        japanese: "皆さん画面は見えていますか？",
        pronunciation: "キャン エブリワン シー マイ スクリーン"
    },
    {
        english: "You're on mute.",
        japanese: "ミュートになっています。",
        pronunciation: "ユーアー オン ミュート"
    },
    {
        english: "Could you please unmute yourself?",
        japanese: "ミュートを解除していただけますか？",
        pronunciation: "クッド ユー プリーズ アンミュート ヨアセルフ"
    },
    {
        english: "I think you're breaking up.",
        japanese: "音声が途切れているようです。",
        pronunciation: "アイ シンク ユーアー ブレイキング アップ"
    },
    {
        english: "Let's do a quick sound check.",
        japanese: "簡単な音声チェックをしましょう。",
        pronunciation: "レッツ ドゥ ア クイック サウンド チェック"
    },
    {
        english: "I'm having technical difficulties.",
        japanese: "技術的な問題が発生しています。",
        pronunciation: "アイム ハビング テクニカル ディフィカルティーズ"
    },
    {
        english: "Let me reconnect quickly.",
        japanese: "すぐに再接続させてください。",
        pronunciation: "レット ミー リコネクト クイックリー"
    },
    {
        english: "Sorry for the technical issues.",
        japanese: "技術的な問題で申し訳ございません。",
        pronunciation: "ソーリー フォー ザ テクニカル イシューズ"
    },
    {
        english: "Welcome back everyone.",
        japanese: "皆さんお帰りなさい。",
        pronunciation: "ウェルカム バック エブリワン"
    },
    {
        english: "Let's pick up where we left off.",
        japanese: "中断したところから再開しましょう。",
        pronunciation: "レッツ ピック アップ ウェア ウィー レフト オフ"
    },
    {
        english: "Before we begin, let me share the agenda.",
        japanese: "始める前に議題を共有させてください。",
        pronunciation: "ビフォー ウィー ビギン レット ミー シェア ジ アジェンダ"
    },

    // 意見表明・提案 (21-40)
    {
        english: "I'd like to propose something.",
        japanese: "提案したいことがあります。",
        pronunciation: "アイド ライク トゥ プロポーズ サムシング"
    },
    {
        english: "In my opinion, we should consider this.",
        japanese: "私の意見では、これを検討すべきです。",
        pronunciation: "イン マイ オピニオン ウィー シュッド コンシダー ディス"
    },
    {
        english: "What if we try a different approach?",
        japanese: "別のアプローチを試したらどうでしょう？",
        pronunciation: "ワット イフ ウィー トライ ア ディファレント アプローチ"
    },
    {
        english: "I have a suggestion.",
        japanese: "提案があります。",
        pronunciation: "アイ ハブ ア サジェスチョン"
    },
    {
        english: "May I add something?",
        japanese: "何か付け加えてもよろしいですか？",
        pronunciation: "メイ アイ アッド サムシング"
    },
    {
        english: "Let me share my thoughts on this.",
        japanese: "これについて私の考えを共有させてください。",
        pronunciation: "レット ミー シェア マイ ソーツ オン ディス"
    },
    {
        english: "From my perspective, this is important.",
        japanese: "私の観点からは、これは重要です。",
        pronunciation: "フロム マイ パースペクティブ ディス イズ インポータント"
    },
    {
        english: "I believe we should prioritize this.",
        japanese: "これを優先すべきだと思います。",
        pronunciation: "アイ ビリーブ ウィー シュッド プライオリタイズ ディス"
    },
    {
        english: "How about considering this option?",
        japanese: "この選択肢を検討するのはどうでしょう？",
        pronunciation: "ハウ アバウト コンシダリング ディス オプション"
    },
    {
        english: "I recommend that we proceed carefully.",
        japanese: "慎重に進めることをお勧めします。",
        pronunciation: "アイ レコメンド ザット ウィー プロシード ケアフリー"
    },
    {
        english: "It might be worth exploring this idea.",
        japanese: "このアイデアを探求する価値があるかもしれません。",
        pronunciation: "イット マイト ビー ワース エクスプローリング ディス アイデア"
    },
    {
        english: "Let's think outside the box.",
        japanese: "既成概念にとらわれずに考えましょう。",
        pronunciation: "レッツ シンク アウトサイド ザ ボックス"
    },
    {
        english: "I'd like to bring up an important point.",
        japanese: "重要な点を提起したいです。",
        pronunciation: "アイド ライク トゥ ブリング アップ アン インポータント ポイント"
    },
    {
        english: "Can I offer an alternative solution?",
        japanese: "代替案を提供してもよろしいですか？",
        pronunciation: "キャン アイ オファー アン オルタナティブ ソリューション"
    },
    {
        english: "I think we're on the right track.",
        japanese: "正しい方向に進んでいると思います。",
        pronunciation: "アイ シンク ウィーアー オン ザ ライト トラック"
    },
    {
        english: "This aligns with our goals.",
        japanese: "これは私たちの目標と一致しています。",
        pronunciation: "ディス アラインズ ウィズ アワー ゴールズ"
    },
    {
        english: "Let's take a step back and reassess.",
        japanese: "一歩下がって再評価しましょう。",
        pronunciation: "レッツ テイク ア ステップ バック アンド リアセス"
    },
    {
        english: "I see potential in this approach.",
        japanese: "このアプローチに可能性を感じます。",
        pronunciation: "アイ シー ポテンシャル イン ディス アプローチ"
    },
    {
        english: "We might want to reconsider this.",
        japanese: "これを再検討したほうがいいかもしれません。",
        pronunciation: "ウィー マイト ウォント トゥ リコンシダー ディス"
    },
    {
        english: "Let me play devil's advocate.",
        japanese: "あえて反対の立場から言わせてください。",
        pronunciation: "レット ミー プレイ デビルズ アドボケート"
    },

    // 質問・確認 (41-60)
    {
        english: "Could you elaborate on that?",
        japanese: "それについて詳しく説明していただけますか？",
        pronunciation: "クッド ユー イラボレイト オン ザット"
    },
    {
        english: "What do you mean by that?",
        japanese: "それはどういう意味ですか？",
        pronunciation: "ワット ドゥ ユー ミーン バイ ザット"
    },
    {
        english: "Could you give me an example?",
        japanese: "例を挙げていただけますか？",
        pronunciation: "クッド ユー ギブ ミー アン イグザンプル"
    },
    {
        english: "How does this impact our timeline?",
        japanese: "これはスケジュールにどう影響しますか？",
        pronunciation: "ハウ ダズ ディス インパクト アワー タイムライン"
    },
    {
        english: "What are the next steps?",
        japanese: "次のステップは何ですか？",
        pronunciation: "ワット アー ザ ネクスト ステップス"
    },
    {
        english: "Who will be responsible for this?",
        japanese: "誰がこれを担当しますか？",
        pronunciation: "フー ウィル ビー リスポンシブル フォー ディス"
    },
    {
        english: "When is the deadline?",
        japanese: "締切はいつですか？",
        pronunciation: "ウェン イズ ザ デッドライン"
    },
    {
        english: "Do we have the resources for this?",
        japanese: "これに必要なリソースはありますか？",
        pronunciation: "ドゥ ウィー ハブ ザ リソーシズ フォー ディス"
    },
    {
        english: "What's the budget for this project?",
        japanese: "このプロジェクトの予算はいくらですか？",
        pronunciation: "ワッツ ザ バジェット フォー ディス プロジェクト"
    },
    {
        english: "Have we considered all options?",
        japanese: "すべての選択肢を検討しましたか？",
        pronunciation: "ハブ ウィー コンシダード オール オプションズ"
    },
    {
        english: "Is this feasible within our timeframe?",
        japanese: "期限内にこれは実現可能ですか？",
        pronunciation: "イズ ディス フィージブル ウィズイン アワー タイムフレーム"
    },
    {
        english: "Can you clarify the requirements?",
        japanese: "要件を明確にしていただけますか？",
        pronunciation: "キャン ユー クラリファイ ザ リクワイアメンツ"
    },
    {
        english: "What's the priority level of this task?",
        japanese: "このタスクの優先度はどのくらいですか？",
        pronunciation: "ワッツ ザ プライオリティ レベル オブ ディス タスク"
    },
    {
        english: "How will we measure success?",
        japanese: "成功をどのように測定しますか？",
        pronunciation: "ハウ ウィル ウィー メジャー サクセス"
    },
    {
        english: "What are the potential risks?",
        japanese: "潜在的なリスクは何ですか？",
        pronunciation: "ワット アー ザ ポテンシャル リスクス"
    },
    {
        english: "Do we need approval for this?",
        japanese: "これには承認が必要ですか？",
        pronunciation: "ドゥ ウィー ニード アプルーバル フォー ディス"
    },
    {
        english: "Has this been tested before?",
        japanese: "これは以前にテストされましたか？",
        pronunciation: "ハズ ディス ビーン テステッド ビフォー"
    },
    {
        english: "What's the contingency plan?",
        japanese: "緊急時の計画は何ですか？",
        pronunciation: "ワッツ ザ コンティンジェンシー プラン"
    },
    {
        english: "Are there any dependencies?",
        japanese: "依存関係はありますか？",
        pronunciation: "アー ゼア エニー ディペンデンシーズ"
    },
    {
        english: "Can you walk me through the process?",
        japanese: "プロセスを説明していただけますか？",
        pronunciation: "キャン ユー ウォーク ミー スルー ザ プロセス"
    },

    // 同意・理解 (61-80)
    {
        english: "I completely agree with you.",
        japanese: "完全に同意します。",
        pronunciation: "アイ コンプリートリー アグリー ウィズ ユー"
    },
    {
        english: "That makes perfect sense.",
        japanese: "それは完全に理にかなっています。",
        pronunciation: "ザット メイクス パーフェクト センス"
    },
    {
        english: "You're absolutely right.",
        japanese: "まったくその通りです。",
        pronunciation: "ユーアー アブソリュートリー ライト"
    },
    {
        english: "I see your point.",
        japanese: "おっしゃることはわかります。",
        pronunciation: "アイ シー ヨア ポイント"
    },
    {
        english: "That's a valid concern.",
        japanese: "それは妥当な懸念です。",
        pronunciation: "ザッツ ア バリッド コンサーン"
    },
    {
        english: "I understand where you're coming from.",
        japanese: "あなたの立場は理解できます。",
        pronunciation: "アイ アンダースタンド ウェア ユーアー カミング フロム"
    },
    {
        english: "That's exactly what I was thinking.",
        japanese: "まさに私が考えていたことです。",
        pronunciation: "ザッツ イグザクトリー ワット アイ ワズ シンキング"
    },
    {
        english: "I couldn't agree more.",
        japanese: "これ以上ないほど同意します。",
        pronunciation: "アイ クドゥント アグリー モア"
    },
    {
        english: "You've made an excellent point.",
        japanese: "素晴らしい指摘をされました。",
        pronunciation: "ユーブ メイド アン エクセレント ポイント"
    },
    {
        english: "I'm on the same page.",
        japanese: "同じ認識です。",
        pronunciation: "アイム オン ザ セイム ペイジ"
    },
    {
        english: "That resonates with me.",
        japanese: "それは私の心に響きます。",
        pronunciation: "ザット レゾネイツ ウィズ ミー"
    },
    {
        english: "I appreciate your perspective.",
        japanese: "あなたの視点に感謝します。",
        pronunciation: "アイ アプリシエイト ヨア パースペクティブ"
    },
    {
        english: "Thanks for clarifying that.",
        japanese: "明確にしていただきありがとうございます。",
        pronunciation: "サンクス フォー クラリファイング ザット"
    },
    {
        english: "Now I understand better.",
        japanese: "今はよく理解できました。",
        pronunciation: "ナウ アイ アンダースタンド ベター"
    },
    {
        english: "That helps a lot.",
        japanese: "とても助かります。",
        pronunciation: "ザット ヘルプス ア ロット"
    },
    {
        english: "I see what you mean now.",
        japanese: "今おっしゃることがわかりました。",
        pronunciation: "アイ シー ワット ユー ミーン ナウ"
    },
    {
        english: "Thanks for the explanation.",
        japanese: "説明ありがとうございます。",
        pronunciation: "サンクス フォー ジ エクスプラネーション"
    },
    {
        english: "That's crystal clear now.",
        japanese: "今は非常に明確です。",
        pronunciation: "ザッツ クリスタル クリア ナウ"
    },
    {
        english: "I'm glad we're aligned on this.",
        japanese: "これについて一致して嬉しいです。",
        pronunciation: "アイム グラッド ウィーアー アラインド オン ディス"
    },
    {
        english: "We seem to be in agreement.",
        japanese: "私たちは同意しているようです。",
        pronunciation: "ウィー シーム トゥ ビー イン アグリーメント"
    },

    // 不同意・懸念 (81-100)
    {
        english: "I respectfully disagree.",
        japanese: "恐れ入りますが同意できません。",
        pronunciation: "アイ リスペクトフリー ディスアグリー"
    },
    {
        english: "I'm not sure about that.",
        japanese: "それについては確信が持てません。",
        pronunciation: "アイム ノット シュア アバウト ザット"
    },
    {
        english: "I have some concerns about this.",
        japanese: "これについていくつか懸念があります。",
        pronunciation: "アイ ハブ サム コンサーンズ アバウト ディス"
    },
    {
        english: "I see it differently.",
        japanese: "私は違う見方をしています。",
        pronunciation: "アイ シー イット ディファレントリー"
    },
    {
        english: "Let me offer a different perspective.",
        japanese: "別の視点を提供させてください。",
        pronunciation: "レット ミー オファー ア ディファレント パースペクティブ"
    },
    {
        english: "I'm afraid I can't agree with that.",
        japanese: "申し訳ありませんが、それには同意できません。",
        pronunciation: "アイム アフレイド アイ キャント アグリー ウィズ ザット"
    },
    {
        english: "That might be problematic.",
        japanese: "それは問題があるかもしれません。",
        pronunciation: "ザット マイト ビー プロブレマティック"
    },
    {
        english: "I'm not convinced yet.",
        japanese: "まだ納得していません。",
        pronunciation: "アイム ノット コンビンスト イェット"
    },
    {
        english: "We might need to reconsider.",
        japanese: "再検討が必要かもしれません。",
        pronunciation: "ウィー マイト ニード トゥ リコンシダー"
    },
    {
        english: "I have reservations about this.",
        japanese: "これについて不安があります。",
        pronunciation: "アイ ハブ リザベーションズ アバウト ディス"
    },
    {
        english: "That's not quite what I had in mind.",
        japanese: "私が考えていたのとは少し違います。",
        pronunciation: "ザッツ ノット クワイト ワット アイ ハッド イン マインド"
    },
    {
        english: "I'm hesitant to proceed with this.",
        japanese: "これを進めるのをためらっています。",
        pronunciation: "アイム ヘジタント トゥ プロシード ウィズ ディス"
    },
    {
        english: "Could we explore other options?",
        japanese: "他の選択肢を探ることはできますか？",
        pronunciation: "クッド ウィー エクスプロー アザー オプションズ"
    },
    {
        english: "I think we should be cautious.",
        japanese: "慎重になるべきだと思います。",
        pronunciation: "アイ シンク ウィー シュッド ビー コーシャス"
    },
    {
        english: "There might be a better way.",
        japanese: "もっと良い方法があるかもしれません。",
        pronunciation: "ゼア マイト ビー ア ベター ウェイ"
    },
    {
        english: "I'm not entirely comfortable with this.",
        japanese: "これには完全に納得していません。",
        pronunciation: "アイム ノット エンタイアリー コンフォータブル ウィズ ディス"
    },
    {
        english: "Let's not rush into this.",
        japanese: "これに急いで取り組まないようにしましょう。",
        pronunciation: "レッツ ノット ラッシュ イントゥ ディス"
    },
    {
        english: "We should consider the risks.",
        japanese: "リスクを考慮すべきです。",
        pronunciation: "ウィー シュッド コンシダー ザ リスクス"
    },
    {
        english: "I'd like to see more data.",
        japanese: "もっとデータを見たいです。",
        pronunciation: "アイド ライク トゥ シー モア データ"
    },
    {
        english: "Can we take some time to think about it?",
        japanese: "少し考える時間をいただけますか？",
        pronunciation: "キャン ウィー テイク サム タイム トゥ シンク アバウト イット"
    },

    // 進行管理・時間 (101-120)
    {
        english: "Let's move on to the next topic.",
        japanese: "次のトピックに移りましょう。",
        pronunciation: "レッツ ムーブ オン トゥ ザ ネクスト トピック"
    },
    {
        english: "We're running out of time.",
        japanese: "時間がなくなってきました。",
        pronunciation: "ウィーアー ランニング アウト オブ タイム"
    },
    {
        english: "Let's wrap up this discussion.",
        japanese: "この議論をまとめましょう。",
        pronunciation: "レッツ ラップ アップ ディス ディスカッション"
    },
    {
        english: "Can we extend the meeting?",
        japanese: "会議を延長できますか？",
        pronunciation: "キャン ウィー エクステンド ザ ミーティング"
    },
    {
        english: "Let's table this for now.",
        japanese: "これは一旦保留にしましょう。",
        pronunciation: "レッツ テーブル ディス フォー ナウ"
    },
    {
        english: "We need to stay on schedule.",
        japanese: "スケジュール通りに進める必要があります。",
        pronunciation: "ウィー ニード トゥ ステイ オン スケジュール"
    },
    {
        english: "Let's take a five-minute break.",
        japanese: "5分休憩を取りましょう。",
        pronunciation: "レッツ テイク ア ファイブ ミニット ブレイク"
    },
    {
        english: "We're making good progress.",
        japanese: "順調に進んでいます。",
        pronunciation: "ウィーアー メイキング グッド プログレス"
    },
    {
        english: "Let's speed things up a bit.",
        japanese: "少しペースを上げましょう。",
        pronunciation: "レッツ スピード シングス アップ ア ビット"
    },
    {
        english: "We're ahead of schedule.",
        japanese: "予定より進んでいます。",
        pronunciation: "ウィーアー アヘッド オブ スケジュール"
    },
    {
        english: "Let's stick to the agenda.",
        japanese: "議題に沿って進めましょう。",
        pronunciation: "レッツ スティック トゥ ジ アジェンダ"
    },
    {
        english: "We've covered a lot today.",
        japanese: "今日は多くのことをカバーしました。",
        pronunciation: "ウィーブ カバード ア ロット トゥデイ"
    },
    {
        english: "Let's prioritize the urgent items.",
        japanese: "緊急項目を優先しましょう。",
        pronunciation: "レッツ プライオリタイズ ザ アージェント アイテムズ"
    },
    {
        english: "Can we circle back to this later?",
        japanese: "後でこれに戻ることはできますか？",
        pronunciation: "キャン ウィー サークル バック トゥ ディス レイター"
    },
    {
        english: "Let's keep this brief.",
        japanese: "簡潔にしましょう。",
        pronunciation: "レッツ キープ ディス ブリーフ"
    },
    {
        english: "We have 10 minutes left.",
        japanese: "残り10分です。",
        pronunciation: "ウィー ハブ テン ミニッツ レフト"
    },
    {
        english: "Let's allocate more time for this.",
        japanese: "これにもっと時間を割きましょう。",
        pronunciation: "レッツ アロケイト モア タイム フォー ディス"
    },
    {
        english: "Should we schedule a follow-up?",
        japanese: "フォローアップを予定すべきですか？",
        pronunciation: "シュッド ウィー スケジュール ア フォローアップ"
    },
    {
        english: "Let's continue this offline.",
        japanese: "これはオフラインで続けましょう。",
        pronunciation: "レッツ コンティニュー ディス オフライン"
    },
    {
        english: "We're getting off track.",
        japanese: "話が脱線しています。",
        pronunciation: "ウィーアー ゲッティング オフ トラック"
    },

    // アクション・フォローアップ (121-140)
    {
        english: "I'll take care of that.",
        japanese: "それは私が対応します。",
        pronunciation: "アイル テイク ケア オブ ザット"
    },
    {
        english: "I'll follow up on this.",
        japanese: "これをフォローアップします。",
        pronunciation: "アイル フォロー アップ オン ディス"
    },
    {
        english: "Let me get back to you on that.",
        japanese: "その件については後日回答します。",
        pronunciation: "レット ミー ゲット バック トゥ ユー オン ザット"
    },
    {
        english: "I'll send out the meeting minutes.",
        japanese: "議事録を送付します。",
        pronunciation: "アイル センド アウト ザ ミーティング ミニッツ"
    },
    {
        english: "I'll coordinate with the team.",
        japanese: "チームと調整します。",
        pronunciation: "アイル コーディネート ウィズ ザ チーム"
    },
    {
        english: "I'll update you by Friday.",
        japanese: "金曜日までに更新します。",
        pronunciation: "アイル アップデート ユー バイ フライデー"
    },
    {
        english: "Let's set a deadline for this.",
        japanese: "これに締切を設定しましょう。",
        pronunciation: "レッツ セット ア デッドライン フォー ディス"
    },
    {
        english: "I'll prepare a report.",
        japanese: "報告書を準備します。",
        pronunciation: "アイル プリペア ア リポート"
    },
    {
        english: "I'll schedule the next meeting.",
        japanese: "次の会議を予定します。",
        pronunciation: "アイル スケジュール ザ ネクスト ミーティング"
    },
    {
        english: "I'll look into this matter.",
        japanese: "この件を調査します。",
        pronunciation: "アイル ルック イントゥ ディス マター"
    },
    {
        english: "Let me check and confirm.",
        japanese: "確認させてください。",
        pronunciation: "レット ミー チェック アンド コンファーム"
    },
    {
        english: "I'll reach out to the stakeholders.",
        japanese: "関係者に連絡します。",
        pronunciation: "アイル リーチ アウト トゥ ザ ステークホルダーズ"
    },
    {
        english: "I'll compile the data.",
        japanese: "データをまとめます。",
        pronunciation: "アイル コンパイル ザ データ"
    },
    {
        english: "I'll draft a proposal.",
        japanese: "提案書の草案を作成します。",
        pronunciation: "アイル ドラフト ア プロポーザル"
    },
    {
        english: "I'll handle the logistics.",
        japanese: "ロジスティクスを担当します。",
        pronunciation: "アイル ハンドル ザ ロジスティクス"
    },
    {
        english: "I'll review the documents.",
        japanese: "書類を確認します。",
        pronunciation: "アイル レビュー ザ ドキュメンツ"
    },
    {
        english: "I'll set up a meeting.",
        japanese: "会議を設定します。",
        pronunciation: "アイル セット アップ ア ミーティング"
    },
    {
        english: "I'll send you the details.",
        japanese: "詳細をお送りします。",
        pronunciation: "アイル センド ユー ザ ディテールズ"
    },
    {
        english: "I'll keep you posted.",
        japanese: "進捗をお知らせします。",
        pronunciation: "アイル キープ ユー ポステッド"
    },
    {
        english: "I'll make the necessary arrangements.",
        japanese: "必要な手配をします。",
        pronunciation: "アイル メイク ザ ネセサリー アレンジメンツ"
    },

    // プロジェクト・状況 (141-160)
    {
        english: "We're on track with the project.",
        japanese: "プロジェクトは予定通り進んでいます。",
        pronunciation: "ウィーアー オン トラック ウィズ ザ プロジェクト"
    },
    {
        english: "There's been a slight delay.",
        japanese: "少し遅延が発生しています。",
        pronunciation: "ゼアズ ビーン ア スライト ディレイ"
    },
    {
        english: "We've hit a roadblock.",
        japanese: "障害にぶつかりました。",
        pronunciation: "ウィーブ ヒット ア ロードブロック"
    },
    {
        english: "Everything is going smoothly.",
        japanese: "すべて順調に進んでいます。",
        pronunciation: "エブリシング イズ ゴーイング スムーズリー"
    },
    {
        english: "We need to pivot our strategy.",
        japanese: "戦略を転換する必要があります。",
        pronunciation: "ウィー ニード トゥ ピボット アワー ストラテジー"
    },
    {
        english: "The project is within budget.",
        japanese: "プロジェクトは予算内です。",
        pronunciation: "ザ プロジェクト イズ ウィズイン バジェット"
    },
    {
        english: "We're exceeding expectations.",
        japanese: "期待を上回っています。",
        pronunciation: "ウィーアー エクシーディング エクスペクテーションズ"
    },
    {
        english: "We've achieved a milestone.",
        japanese: "マイルストーンを達成しました。",
        pronunciation: "ウィーブ アチーブド ア マイルストーン"
    },
    {
        english: "There's room for improvement.",
        japanese: "改善の余地があります。",
        pronunciation: "ゼアズ ルーム フォー インプルーブメント"
    },
    {
        english: "We're facing some challenges.",
        japanese: "いくつかの課題に直面しています。",
        pronunciation: "ウィーアー フェイシング サム チャレンジズ"
    },
    {
        english: "The results are promising.",
        japanese: "結果は有望です。",
        pronunciation: "ザ リザルツ アー プロミシング"
    },
    {
        english: "We need to scale up.",
        japanese: "規模を拡大する必要があります。",
        pronunciation: "ウィー ニード トゥ スケール アップ"
    },
    {
        english: "Let's do a status update.",
        japanese: "ステータス更新をしましょう。",
        pronunciation: "レッツ ドゥ ア ステータス アップデート"
    },
    {
        english: "We're in the final phase.",
        japanese: "最終段階にいます。",
        pronunciation: "ウィーアー イン ザ ファイナル フェーズ"
    },
    {
        english: "The launch was successful.",
        japanese: "ローンチは成功しました。",
        pronunciation: "ザ ローンチ ワズ サクセスフル"
    },
    {
        english: "We need to troubleshoot this issue.",
        japanese: "この問題をトラブルシューティングする必要があります。",
        pronunciation: "ウィー ニード トゥ トラブルシュート ディス イシュー"
    },
    {
        english: "Let's conduct a review.",
        japanese: "レビューを実施しましょう。",
        pronunciation: "レッツ コンダクト ア レビュー"
    },
    {
        english: "The feedback has been positive.",
        japanese: "フィードバックは肯定的でした。",
        pronunciation: "ザ フィードバック ハズ ビーン ポジティブ"
    },
    {
        english: "We're optimizing the process.",
        japanese: "プロセスを最適化しています。",
        pronunciation: "ウィーアー オプティマイジング ザ プロセス"
    },
    {
        english: "The implementation is complete.",
        japanese: "実装が完了しました。",
        pronunciation: "ジ インプリメンテーション イズ コンプリート"
    },

    // 感謝・評価 (161-180)
    {
        english: "Thank you for your hard work.",
        japanese: "ご尽力ありがとうございます。",
        pronunciation: "サンキュー フォー ヨア ハード ワーク"
    },
    {
        english: "I appreciate your effort.",
        japanese: "あなたの努力に感謝します。",
        pronunciation: "アイ アプリシエイト ヨア エフォート"
    },
    {
        english: "Great job on the presentation.",
        japanese: "プレゼンテーション素晴らしかったです。",
        pronunciation: "グレイト ジョブ オン ザ プレゼンテーション"
    },
    {
        english: "Your input is valuable.",
        japanese: "あなたの意見は貴重です。",
        pronunciation: "ヨア インプット イズ バリュアブル"
    },
    {
        english: "Thanks for bringing this to my attention.",
        japanese: "これを教えていただきありがとうございます。",
        pronunciation: "サンクス フォー ブリンギング ディス トゥ マイ アテンション"
    },
    {
        english: "I'm impressed with the results.",
        japanese: "結果に感銘を受けました。",
        pronunciation: "アイム インプレスト ウィズ ザ リザルツ"
    },
    {
        english: "Excellent work everyone.",
        japanese: "皆さん素晴らしい仕事です。",
        pronunciation: "エクセレント ワーク エブリワン"
    },
    {
        english: "This is outstanding.",
        japanese: "これは素晴らしいです。",
        pronunciation: "ディス イズ アウトスタンディング"
    },
    {
        english: "You've exceeded expectations.",
        japanese: "期待を超えました。",
        pronunciation: "ユーブ エクシーディッド エクスペクテーションズ"
    },
    {
        english: "Well done on completing this.",
        japanese: "完成させてよくやりました。",
        pronunciation: "ウェル ダン オン コンプリーティング ディス"
    },
    {
        english: "Your dedication is appreciated.",
        japanese: "あなたの献身に感謝します。",
        pronunciation: "ヨア デディケーション イズ アプリシエイテッド"
    },
    {
        english: "Thanks for your patience.",
        japanese: "お待ちいただきありがとうございます。",
        pronunciation: "サンクス フォー ヨア ペイシェンス"
    },
    {
        english: "I value your contribution.",
        japanese: "あなたの貢献を評価しています。",
        pronunciation: "アイ バリュー ヨア コントリビューション"
    },
    {
        english: "That was very helpful.",
        japanese: "とても助かりました。",
        pronunciation: "ザット ワズ ベリー ヘルプフル"
    },
    {
        english: "Thanks for the quick response.",
        japanese: "迅速な対応ありがとうございます。",
        pronunciation: "サンクス フォー ザ クイック レスポンス"
    },
    {
        english: "Your expertise is invaluable.",
        japanese: "あなたの専門知識は非常に貴重です。",
        pronunciation: "ヨア エクスパティーズ イズ インバリュアブル"
    },
    {
        english: "I'm grateful for your support.",
        japanese: "サポートに感謝しています。",
        pronunciation: "アイム グレイトフル フォー ヨア サポート"
    },
    {
        english: "Thanks for accommodating this request.",
        japanese: "この要望に対応いただきありがとうございます。",
        pronunciation: "サンクス フォー アコモデイティング ディス リクエスト"
    },
    {
        english: "Your flexibility is appreciated.",
        japanese: "柔軟な対応に感謝します。",
        pronunciation: "ヨア フレキシビリティ イズ アプリシエイテッド"
    },
    {
        english: "Kudos to the team.",
        japanese: "チームに称賛を。",
        pronunciation: "クードス トゥ ザ チーム"
    },

    // 謝罪・対応 (181-200)
    {
        english: "I apologize for the delay.",
        japanese: "遅れて申し訳ございません。",
        pronunciation: "アイ アポロジャイズ フォー ザ ディレイ"
    },
    {
        english: "Sorry for the confusion.",
        japanese: "混乱させて申し訳ございません。",
        pronunciation: "ソーリー フォー ザ コンフュージョン"
    },
    {
        english: "Let me correct that.",
        japanese: "訂正させてください。",
        pronunciation: "レット ミー コレクト ザット"
    },
    {
        english: "I take full responsibility.",
        japanese: "全責任を負います。",
        pronunciation: "アイ テイク フル リスポンシビリティ"
    },
    {
        english: "That was my oversight.",
        japanese: "それは私の見落としでした。",
        pronunciation: "ザット ワズ マイ オーバーサイト"
    },
    {
        english: "I'll make sure it doesn't happen again.",
        japanese: "二度と起こらないようにします。",
        pronunciation: "アイル メイク シュア イット ダズント ハプン アゲイン"
    },
    {
        english: "Please bear with me.",
        japanese: "お待ちください。",
        pronunciation: "プリーズ ベア ウィズ ミー"
    },
    {
        english: "I understand your frustration.",
        japanese: "ご不満は理解できます。",
        pronunciation: "アイ アンダースタンド ヨア フラストレーション"
    },
    {
        english: "Let me make it right.",
        japanese: "正しく修正させてください。",
        pronunciation: "レット ミー メイク イット ライト"
    },
    {
        english: "I'll address this immediately.",
        japanese: "すぐに対処します。",
        pronunciation: "アイル アドレス ディス イミディエイトリー"
    },
    {
        english: "Thanks for your understanding.",
        japanese: "ご理解いただきありがとうございます。",
        pronunciation: "サンクス フォー ヨア アンダースタンディング"
    },
    {
        english: "I'll look into this right away.",
        japanese: "すぐに調査します。",
        pronunciation: "アイル ルック イントゥ ディス ライト アウェイ"
    },
    {
        english: "We'll resolve this quickly.",
        japanese: "迅速に解決します。",
        pronunciation: "ウィール リゾルブ ディス クイックリー"
    },
    {
        english: "I appreciate your patience.",
        japanese: "お待ちいただき感謝します。",
        pronunciation: "アイ アプリシエイト ヨア ペイシェンス"
    },
    {
        english: "Let me clarify the situation.",
        japanese: "状況を明確にさせてください。",
        pronunciation: "レット ミー クラリファイ ザ シチュエーション"
    },
    {
        english: "Sorry for any inconvenience.",
        japanese: "ご不便をおかけして申し訳ございません。",
        pronunciation: "ソーリー フォー エニー インコンビニエンス"
    },
    {
        english: "We're working on a solution.",
        japanese: "解決策に取り組んでいます。",
        pronunciation: "ウィーアー ワーキング オン ア ソリューション"
    },
    {
        english: "I'll escalate this issue.",
        japanese: "この問題をエスカレーションします。",
        pronunciation: "アイル エスカレート ディス イシュー"
    },
    {
        english: "Please accept my apologies.",
        japanese: "お詫び申し上げます。",
        pronunciation: "プリーズ アクセプト マイ アポロジーズ"
    },
    {
        english: "Thank you for bringing this to light.",
        japanese: "これを明らかにしていただきありがとうございます。",
        pronunciation: "サンキュー フォー ブリンギング ディス トゥ ライト"
    }
];

// DOM要素の取得
const dayCount = document.getElementById('dayCount');
const dailyPhrase = document.getElementById('dailyPhrase');
const phraseJapanese = document.getElementById('phraseJapanese');
const phrasePronunciation = document.getElementById('phrasePronunciation');
const playBtn = document.getElementById('playBtn');
const speedSlider = document.getElementById('speedSlider');
const speedValue = document.getElementById('speedValue');
const recordBtn = document.getElementById('recordBtn');
const resultArea = document.getElementById('resultArea');
const recognizedText = document.getElementById('recognizedText');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentPhraseIndex = 0;

// フレーズを表示
function displayPhrase(index) {
    const phrase = phrasesData[index];
    dailyPhrase.textContent = phrase.english;
    phraseJapanese.textContent = phrase.japanese;
    phrasePronunciation.textContent = phrase.pronunciation;
    dayCount.textContent = index + 1;
    resultArea.classList.add('hidden');
}

// 初期表示
displayPhrase(0);

// お手本を再生
playBtn.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(phrasesData[currentPhraseIndex].english);
    utterance.lang = 'en-US';
    utterance.rate = parseFloat(speedSlider.value);
    speechSynthesis.speak(utterance);
});

// 速度調整
speedSlider.addEventListener('input', (e) => {
    speedValue.textContent = e.target.value;
});

// 録音ボタンのイベント
recordBtn.addEventListener('click', () => {
    // 現在の英文を表示しながら入力
    const currentPhrase = phrasesData[currentPhraseIndex].english;
    const userInput = prompt(`📝 次の文を入力:\n\n${currentPhrase}`);
    
    if (userInput) {
        resultArea.classList.remove('hidden');
        recognizedText.textContent = userInput;
        
        // 正解との比較（ピリオドを除外して比較）
        const correct = userInput.toLowerCase().trim().replace(/[.!?]/g, '') === 
                       currentPhrase.toLowerCase().trim().replace(/[.!?]/g, '');
        
        recognizedText.style.color = correct ? '#10b981' : '#ef4444';
        recognizedText.innerHTML += correct ? 
            '<br>✅ 完璧です！' : 
            '<br>❌ もう一度挑戦してください';
    }
});

// ナビゲーション
prevBtn.addEventListener('click', () => {
    currentPhraseIndex = currentPhraseIndex > 0 ? currentPhraseIndex - 1 : phrasesData.length - 1;
    displayPhrase(currentPhraseIndex);
});

nextBtn.addEventListener('click', () => {
    currentPhraseIndex = (currentPhraseIndex + 1) % phrasesData.length;
    displayPhrase(currentPhraseIndex);
});

// Service Worker の登録
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(registration => console.log('SW registered'))
      .catch(err => console.log('SW registration failed'));
  });
}