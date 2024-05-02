import { useState } from 'react'
import { Accordion, Button, Table, TextInput } from 'flowbite-react'

import { FcSearch } from "react-icons/fc";
function App() {
	// const [count, setCount] = useState<number>(0)

	const [createCount, setCreateCount] = useState<number>(100);

	const images: any = {
		"グリフォンのエリクサー": "https://ossan-gamer.net/files/bdoicon/%E3%82%B0%E3%83%AA%E3%83%95%E3%82%A9%E3%83%B3%E3%81%AE%E3%82%A8%E3%83%AA%E3%82%AF%E3%82%B5%E3%83%BC.png",
		"グリフォンの爪": "https://ossan-gamer.net/files/bdoicon/%E3%82%B0%E3%83%AA%E3%83%95%E3%82%A9%E3%83%B3%E3%81%AE%E7%88%AA.png",
		"精製水": "https://ossan-gamer.net/files/bdoicon/%E7%B2%BE%E8%A3%BD%E6%B0%B4.png",
		"戦闘の痕跡": "https://ossan-gamer.net/files/bdoicon/%E6%88%A6%E9%97%98%E3%81%AE%E7%97%95%E8%B7%A1.png",
		"スギ樹液": "https://ossan-gamer.net/files/bdoicon/%E3%82%B9%E3%82%AE%E6%A8%B9%E6%B6%B2.png",
		"罪人の血": "https://ossan-gamer.net/files/bdoicon/%E7%BD%AA%E4%BA%BA%E3%81%AE%E8%A1%80.png",

		"亜人狩りのエリクサー": "https://ossan-gamer.net/files/bdoicon/%E4%BA%9C%E4%BA%BA%E7%8B%A9%E3%82%8A%E3%81%AE%E3%82%A8%E3%83%AA%E3%82%AF%E3%82%B5%E3%83%BC.png",
		"ブラックストーン粉末": "https://ossan-gamer.net/files/bdoicon/%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF%E3%82%B9%E3%83%88%E3%83%BC%E3%83%B3%E7%B2%89%E6%9C%AB.png",
		"アローキノコ": "https://ossan-gamer.net/files/bdoicon/%E3%82%A2%E3%83%AD%E3%83%BC%E3%82%AD%E3%83%8E%E3%82%B3.png",
		"モミの木樹液": "https://ossan-gamer.net/files/bdoicon/%E3%83%A2%E3%83%9F%E3%81%AE%E6%9C%A8%E6%A8%B9%E6%B6%B2.png",
		"抵抗のエリクサー": "https://ossan-gamer.net/files/bdoicon/%E6%8A%B5%E6%8A%97%E3%81%AE%E3%82%A8%E3%83%AA%E3%82%AF%E3%82%B5%E3%83%BC.png",
		"シラカバ樹液": "https://ossan-gamer.net/files/bdoicon/%E3%82%B7%E3%83%A9%E3%82%AB%E3%83%90%E6%A8%B9%E6%B6%B2.png",
		"クラウドキノコ": "https://ossan-gamer.net/files/bdoicon/%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%89%E3%82%AD%E3%83%8E%E3%82%B3.png",
		"オオカミの血・フラミンゴの血・チータードラゴンの血・サイの血": "https://ossan-gamer.net/files/bdoicon/%E3%82%AA%E3%82%AA%E3%82%AB%E3%83%9F%E3%81%AE%E8%A1%80%E3%83%BB%E3%83%95%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B4%E3%81%AE%E8%A1%80%E3%83%BB%E3%83%81%E3%83%BC%E3%82%BF%E3%83%BC%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%81%AE%E8%A1%80%E3%83%BB%E3%82%B5%E3%82%A4%E3%81%AE%E8%A1%80.png",
		"破壊のエリクサー": "https://ossan-gamer.net/files/bdoicon/%E7%A0%B4%E5%A3%8A%E3%81%AE%E3%82%A8%E3%83%AA%E3%82%AF%E3%82%B5%E3%83%BC.png",
		"暴風の油": "https://ossan-gamer.net/files/bdoicon/%E6%9A%B4%E9%A2%A8%E3%81%AE%E6%B2%B9.png",
		"狩猟の痕跡": "https://ossan-gamer.net/files/bdoicon/%E7%8B%A9%E7%8C%9F%E3%81%AE%E7%97%95%E8%B7%A1.png",
		"澄んだ液体試薬": "https://ossan-gamer.net/files/bdoicon/%E6%BE%84%E3%82%93%E3%81%A0%E6%B6%B2%E4%BD%93%E8%A9%A6%E8%96%AC.png",
		"炎の粉末": "https://ossan-gamer.net/files/bdoicon/%E7%82%8E%E3%81%AE%E7%B2%89%E6%9C%AB.png",
		"雪原スギの樹液": "https://ossan-gamer.net/files/bdoicon/%E9%9B%AA%E5%8E%9F%E3%82%B9%E3%82%AE%E3%81%AE%E6%A8%B9%E6%B6%B2.png",
		"狂乱のエリクサー": "https://ossan-gamer.net/files/bdoicon/%E7%8B%82%E4%B9%B1%E3%81%AE%E3%82%A8%E3%83%AA%E3%82%AF%E3%82%B5%E3%83%BC.png",
		"ゴーストキノコ": "https://ossan-gamer.net/files/bdoicon/%E3%82%B4%E3%83%BC%E3%82%B9%E3%83%88%E3%82%AD%E3%83%8E%E3%82%B3.png",
		"スギ樹液 ": "https://ossan-gamer.net/files/bdoicon/%E3%82%B9%E3%82%AE%E6%A8%B9%E6%B6%B2.png",
		"再生の油": "https://ossan-gamer.net/files/bdoicon/%E5%86%8D%E7%94%9F%E3%81%AE%E6%B2%B9.png",
		"集中のエリクサー": "https://ossan-gamer.net/files/bdoicon/%E9%9B%86%E4%B8%AD%E3%81%AE%E3%82%A8%E3%83%AA%E3%82%AF%E3%82%B5%E3%83%BC.png",
		"野生野草": "https://ossan-gamer.net/files/bdoicon/%E9%87%8E%E7%94%9F%E9%87%8E%E8%8D%89(%E9%87%8E%E7%94%9F%E9%87%8E%E8%8D%891=%E9%9B%91%E8%8D%894).png",
		"クマの血・トロルの血・オーガの血": "https://ossan-gamer.net/files/bdoicon/%E3%82%AA%E3%82%AA%E3%82%AB%E3%83%9F%E3%81%AE%E8%A1%80%E3%83%BB%E3%83%95%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B4%E3%81%AE%E8%A1%80%E3%83%BB%E3%83%81%E3%83%BC%E3%82%BF%E3%83%BC%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%81%AE%E8%A1%80%E3%83%BB%E3%82%B5%E3%82%A4%E3%81%AE%E8%A1%80.png",
		"略奪のエリクサー": "https://ossan-gamer.net/files/bdoicon/%E7%95%A5%E5%A5%AA%E3%81%AE%E3%82%A8%E3%83%AA%E3%82%AF%E3%82%B5%E3%83%BC.png",
		"不屈の油": "https://ossan-gamer.net/files/bdoicon/%E4%B8%8D%E5%B1%88%E3%81%AE%E6%B2%B9.png",
		"バンプキノコ": "https://ossan-gamer.net/files/bdoicon/%E3%83%90%E3%83%B3%E3%83%97%E3%82%AD%E3%83%8E%E3%82%B3.png",
		"森の痕跡": "https://ossan-gamer.net/files/bdoicon/%E6%A3%AE%E3%81%AE%E7%97%95%E8%B7%A1.png",
		"暗殺者のエリクサー": "https://ossan-gamer.net/files/bdoicon/%E6%9A%97%E6%AE%BA%E8%80%85%E3%81%AE%E3%82%A8%E3%83%AA%E3%82%AF%E3%82%B5%E3%83%BC.png",
		"記憶の痕跡": "https://ossan-gamer.net/files/bdoicon/%E8%A8%98%E6%86%B6%E3%81%AE%E7%97%95%E8%B7%A1.png",
		"ヒュージキノコ": "https://ossan-gamer.net/files/bdoicon/%E3%83%92%E3%83%A5%E3%83%BC%E3%82%B8%E3%82%AD%E3%83%8E%E3%82%B3.png",
		"赤い木のこぶ": "https://ossan-gamer.net/files/bdoicon/%E8%B5%A4%E3%81%84%E6%9C%A8%E3%81%AE%E3%81%93%E3%81%B6.png",
		"純粋な粉の試薬": "https://ossan-gamer.net/files/bdoicon/%E7%B4%94%E7%B2%8B%E3%81%AA%E7%B2%89%E3%81%AE%E8%A9%A6%E8%96%AC.png",
		"意志のエリクサー": "https://ossan-gamer.net/files/bdoicon/%E6%84%8F%E5%BF%97%E3%81%AE%E3%82%A8%E3%83%AA%E3%82%AF%E3%82%B5%E3%83%BC.png",
		"黎明草": "https://ossan-gamer.net/files/bdoicon/%E9%BB%8E%E6%98%8E%E8%8D%89.png",
		"死神のエリクサー": "https://ossan-gamer.net/files/bdoicon/%E6%AD%BB%E7%A5%9E%E3%81%AE%E3%82%A8%E3%83%AA%E3%82%AF%E3%82%B5%E3%83%BC.png",
		"スカイキノコ": "https://ossan-gamer.net/files/bdoicon/%E3%82%B9%E3%82%AB%E3%82%A4%E3%82%AD%E3%83%8E%E3%82%B3.png",
		"修道士の枝": "https://ossan-gamer.net/files/bdoicon/%E4%BF%AE%E9%81%93%E5%A3%AB%E3%81%AE%E6%9E%9D.png",
		"防御のエリクサー": "https://ossan-gamer.net/files/bdoicon/%E9%98%B2%E5%BE%A1%E3%81%AE%E3%82%A8%E3%83%AA%E3%82%AF%E3%82%B5%E3%83%BC.png",
		"トネリコ樹液": "https://ossan-gamer.net/files/bdoicon/%E3%83%88%E3%83%8D%E3%83%AA%E3%82%B3%E6%A8%B9%E6%B6%B2.png",
		"豚の血・羊の血・牛の血・鹿の血・ワラゴンの血": "https://ossan-gamer.net/files/bdoicon/%E8%B1%9A%E3%81%AE%E8%A1%80%E3%83%BB%E7%BE%8A%E3%81%AE%E8%A1%80%E3%83%BB%E7%89%9B%E3%81%AE%E8%A1%80%E3%83%BB%E9%B9%BF%E3%81%AE%E8%A1%80%E3%83%BB%E3%83%AF%E3%83%A9%E3%82%B4%E3%83%B3%E3%81%AE%E8%A1%80.png",
		"金属溶解剤": "https://ossan-gamer.net/files/bdoicon/%E9%87%91%E5%B1%9E%E6%BA%B6%E8%A7%A3%E5%89%A4.png",
		"粗石": "https://ossan-gamer.net/files/bdoicon/%E7%B2%97%E7%9F%B3.png",
		"溶けた鉄の欠片": "https://ossan-gamer.net/files/bdoicon/%E6%BA%B6%E3%81%91%E3%81%9F%E9%89%84%E3%81%AE%E6%AC%A0%E7%89%87.png",
		"宝石研磨材": "https://ossan-gamer.net/files/bdoicon/%E5%AE%9D%E7%9F%B3%E7%A0%94%E7%A3%A8%E5%89%A4.png",
		"加工石炭": "https://ossan-gamer.net/files/bdoicon/%E5%8A%A0%E5%B7%A5%E7%9F%B3%E7%82%AD.png",
		"自然の痕跡": "https://ossan-gamer.net/files/bdoicon/%E6%A3%AE%E3%81%AE%E7%97%95%E8%B7%A1.png",
		"銀色ツツジ": "https://ossan-gamer.net/files/bdoicon/%E9%8A%80%E8%89%B2%E3%83%84%E3%83%84%E3%82%B8.png",
		"砂糖": "https://ossan-gamer.net/files/bdoicon/%E7%A0%82%E7%B3%96.png",
		"塩": "https://ossan-gamer.net/files/bdoicon/%E5%A1%A9.png",
		"螺旋のエリクサー": "https://ossan-gamer.net/files/bdoicon/%E8%9E%BA%E6%97%8B%E3%81%AE%E3%82%A8%E3%83%AA%E3%82%AF%E3%82%B5%E3%83%BC.png",
		"コノテガシワ樹液": "https://ossan-gamer.net/files/bdoicon/%E3%82%B3%E3%83%8E%E3%83%86%E3%82%AC%E3%82%B7%E3%83%AF%E6%A8%B9%E6%B6%B2.png",
		"愚者の血": "https://ossan-gamer.net/files/bdoicon/%E6%84%9A%E8%80%85%E3%81%AE%E8%A1%80.png",
		"狂奔の霊薬": "https://ossan-gamer.net/wordpress/wp-content/uploads/2018/01/%E7%8B%82%E5%A5%94%E3%81%AE%E3%82%A8%E3%83%AA%E3%82%AF%E3%82%B5%E3%83%BC.png",
		"深淵の根源": "https://ossan-gamer.net/wordpress/wp-content/uploads/2018/11/%E6%B7%B1%E6%B7%B5%E3%81%AE%E6%A0%B9%E6%BA%90.png",
		"暮れる月の涙": "https://ossan-gamer.net/wordpress/wp-content/uploads/2018/01/%E6%9A%AE%E3%82%8C%E3%82%8B%E6%9C%88%E3%81%AE%E6%B6%99.png",
		"": "",
		"": "",
		"": "",
		"": "",
		"": "",
		"": "",
		"": "",
		"": "",
		"": "",
		"神獣の血": "https://ossan-gamer.net/files/bdoicon/%E7%A5%9E%E7%8D%A3%E3%81%AE%E8%A1%80.png}",
		"闇の粉末": "https://ossan-gamer.net/files/bdoicon/%E9%97%87%E3%81%AE%E7%B2%89%E6%9C%AB.png}",
		"迅速のエリクサー": "https://ossan-gamer.net/files/bdoicon/%E8%BF%85%E9%80%9F%E3%81%AE%E3%82%A8%E3%83%AA%E3%82%AF%E3%82%B5%E3%83%BC.png",
		"賢者の血": "https://ossan-gamer.net/files/bdoicon/%E8%B3%A2%E8%80%85%E3%81%AE%E8%A1%80.png}",
		"魔力の実": "https://ossan-gamer.net/files/bdoicon/%E9%AD%94%E5%8A%9B%E3%81%AE%E5%AE%9F.png}",
		"血色の木の節": "https://ossan-gamer.net/files/bdoicon/%E8%A1%80%E8%89%B2%E3%81%AE%E6%9C%A8%E3%81%AE%E7%AF%80.png}",
		"大地の粉末": "https://ossan-gamer.net/files/bdoicon/%E5%A4%A7%E5%9C%B0%E3%81%AE%E7%B2%89%E6%9C%AB.png}",
		"平穏の油": "https://ossan-gamer.net/files/bdoicon/%E5%B9%B3%E7%A9%8F%E3%81%AE%E3%82%AA%E3%82%A4%E3%83%AB.png",
		"精霊の葉": "https://ossan-gamer.net/files/bdoicon/%E7%B2%BE%E9%9C%8A%E3%81%AE%E8%91%89.png}",
		"大地の痕跡": "https://ossan-gamer.net/files/bdoicon/%E5%A4%A7%E5%9C%B0%E3%81%AE%E7%97%95%E8%B7%A1.png}",
		"リザードの血・ワームの血・コウモリの血・クークー鳥の血・コブラの血": "https://ossan-gamer.net/files/bdoicon/%E3%83%AA%E3%82%B6%E3%83%BC%E3%83%89%E3%81%AE%E8%A1%80%E3%83%BB%E3%83%AF%E3%83%BC%E3%83%A0%E3%81%AE%E8%A1%80%E3%83%BB%E3%82%B3%E3%82%A6%E3%83%A2%E3%83%AA%E3%81%AE%E8%A1%80%E3%83%BB%E3%82%AF%E3%83%BC%E3%82%AF%E3%83%BC%E9%B3%A5%E3%81%AE%E8%A1%80%E3%83%BB%E3%82%B3%E3%83%96%E3%83%A9%E3%81%AE%E8%A1%80.png}",
		"労働者のエリクサー": "https://ossan-gamer.net/files/bdoicon/%E5%8A%B4%E5%83%8D%E8%80%85%E3%81%AE%E3%82%A8%E3%83%AA%E3%82%AF%E3%82%B5%E3%83%BC.png",
		"歳月の粉末": "https://ossan-gamer.net/files/bdoicon/%E6%AD%B3%E6%9C%88%E3%81%AE%E7%B2%89%E6%9C%AB.png}",
		"カエデ樹液": "https://ossan-gamer.net/files/bdoicon/%E3%82%AB%E3%82%A8%E3%83%87%E6%A8%B9%E6%B6%B2.png}",
		"火炎鱗の花": "https://ossan-gamer.net/files/bdoicon/%E7%81%AB%E7%82%8E%E9%B1%97%E3%81%AE%E8%8A%B1.png}",
		"歳月のエリクサー": "https://ossan-gamer.net/files/bdoicon/%E6%AD%B3%E6%9C%88%E3%81%AE%E3%82%A8%E3%83%AA%E3%82%AF%E3%82%B5%E3%83%BC.png",
	}

	const setting: any = {
		"エリクサー": {
			"グリフォンのエリクサー": {
				"グリフォンの爪": 1,
				"精製水": 3,
				"戦闘の痕跡": 3,
				"スギ樹液": 6,
				"罪人の血": 2,
			},
			"亜人狩りのエリクサー": {
				"罪人の血": 1,
				"ブラックストーン粉末": 3,
				"アローキノコ": 4,
				"モミの木樹液": 4
			},
			"抵抗のエリクサー": {
				"シラカバ樹液": 1,
				"クラウドキノコ": 3,
				"精製水": 3,
				"オオカミの血・フラミンゴの血・チータードラゴンの血・サイの血": 7,
			},
			"破壊のエリクサー": {
				"暴風の油": 1,
				"狩猟の痕跡": 3,
				"澄んだ液体試薬": 5,
				"炎の粉末": 5,
				"雪原スギの樹液": 7
			},
			"狂乱のエリクサー": {
				"再生の油": 1,
				"澄んだ液体試薬": 5,
				"ゴーストキノコ": 2,
				"戦闘の痕跡": 3,
				"スギ樹液": 5,
			},

			"集中のエリクサー": {
				"澄んだ液体試薬": 1,
				"クラウドキノコ": 3,
				"クマの血・トロルの血・オーガの血": 3,
				"野生野草": 2,

			},
			"略奪のエリクサー": {
				"不屈の油": 1,
				"澄んだ液体試薬": 4,
				"バンプキノコ": 3,
				"シラカバ樹液": 4,
				"自然の痕跡": 2,
			},
			"暗殺者のエリクサー": {
				"再生の油": 1,
				"記憶の痕跡": 2,
				"ヒュージキノコ": 4,
				"赤い木のこぶ": 2,
				"純粋な粉の試薬": 5,
			},
			"意志のエリクサー": {
				"純粋な粉の試薬": 1,
				"精製水": 3,
				"オオカミの血・フラミンゴの血・チータードラゴンの血・サイの血": 6,
				"黎明草": 4,
			},
			"死神のエリクサー": {
				"不屈の油": 1,
				"純粋な粉の試薬": 4,
				"スカイキノコ": 2,
				"修道士の枝": 2,
				"自然の痕跡": 4,
			},
			"防御のエリクサー": {
				"澄んだ液体試薬": 1,
				"精製水": 3,
				"トネリコ樹液": 6,
				"豚の血・羊の血・牛の血・鹿の血・ワラゴンの血": 5,
			},
			"螺旋のエリクサー": {
				"コノテガシワ樹液": 6,
				"修道士の枝": 3,
				"愚者の血": 2,
				"炎の粉末": 2,
				"精製水": 3,
			},
			"迅速のエリクサー": {
				"神獣の血": 1,
				"アローキノコ": 5,
				"闇の粉末": 2,
				"シラカバ樹液": 5,
			},
			"労働者のエリクサー": {
				"罪人の血": 1,
				"銀色ツツジ": 6,
				"炎の粉末": 2,
				"トネリコ樹液": 4,
			},
			"歳月のエリクサー": {
				"賢者の血": 1,
				"歳月の粉末": 2,
				"カエデ樹液": 5,
				"火炎鱗の花": 6,
			},

		},
		"霊薬": {
			"狂奔の霊薬": {
				"深淵の根源": 1,
				"亜人狩りのエリクサー": 3,
				"狂乱のエリクサー": 3,
				"暮れる月の涙": 1,
			},
		},
		"血": {
			"神獣の血": {
				"純粋な粉の試薬": 1,
				"精霊の葉": 1,
				"自然の痕跡": 1,
				"リザードの血・ワームの血・コウモリの血・クークー鳥の血・コブラの血": 2,
			},
		},
		"油": {
			"平穏の油": {
				"賢者の血": 1,
				"魔力の実": 1,
				"血色の木の節": 1,
				"大地の粉末": 1,
			},
		},
		"中間素材": {
			"純粋な粉の試薬": {
				"砂糖": 1,
				"銀色ツツジ": 1,
				"精製水": 1,
				"野生野草": 1,
			},
			"澄んだ液体試薬": {
				"塩": 1,
				"黎明草": 1,
				"精製水": 1,
				"野生野草": 1,
			},
			"金属溶解剤": {
				"澄んだ液体試薬": 1,
				"自然の痕跡": 2,
				"粗石": 4,
				"溶けた鉄の欠片": 3,
			},
			"宝石研磨材":{
				"純粋な粉の試薬":1,
				"自然の痕跡":2,
				"加工石炭":4,
				"精製水":6,
				},
		}
	}



	return (
		<div className=''>
			{/* 

		const title = document.querySelector("#contentInner > main > article > div > section > h1").innerText;
		const title_link = document.querySelector("#contentInner > main > article > div > section > p:nth-child(5) > img").src;


		// 行（tr要素）を取得
		var rowElems =  document.querySelector('#contentInner > main > article > div > section > table > tbody').rows;

		// 取得した行（tr要素）を繰り返しHTMLを取得
		var htmlStr = '';

		var a = '';

		a += `"${title}":{\r\n`;

		for (i = 0, len = rowElems.length; i < len; i++) {
			console.log(rowElems[i]);
			// 		console.log(rowElems[i].querySelector('tr > td:nth-child(1)'))
			// console.log(rowElems[i].querySelector('tr > td:nth-child(1)').innerText)
			try{
				const img = rowElems[i].querySelector('tr > td:nth-child(1) > img').src
				const item = rowElems[i].querySelector('tr > td:nth-child(1)').innerText
				const num = rowElems[i].querySelector('tr > td:nth-child(2)').innerText
				htmlStr += `"${item}":"${img}}",\r\n`

				a += `"${item}":${num},\r\n`
			}catch{

			}
		}

		a += `},`;

		htmlStr += `"${title}":"${title_link}",`;

		console.log(htmlStr)
		console.log(a)


		"": {
			"": ,
			"": ,
			"": ,
			"": ,
		},
		
		*/}
			<div className='py-4 flex gap-3 sticky top-0 bg-gray-900 border-gray-500 border-b px-5 '>
				<Button color="blue" onClick={() => setCreateCount(100)}>100</Button>
				<Button color="blue" onClick={() => setCreateCount(250)}>250</Button>
				<Button color="blue" onClick={() => setCreateCount(500)}>500</Button>
				<Button color="blue" onClick={() => setCreateCount(1000)}>1000</Button>
				<Button color="blue" onClick={() => setCreateCount(2000)}>2000</Button>

			</div>
			<div className='p-5'>
				<Accordion>
					{<Accordion className='[&_img]:max-w-[25px]'>
						{Object.keys(setting).map((category: string) => (
							<Accordion.Panel>
								<Accordion.Title >{category}</Accordion.Title>
								<Accordion.Content>
									<Accordion className='[&_img]:max-w-[25px]'>
										{Object.keys(setting[category]).map((key: string) => (
											<Accordion.Panel>
												<Accordion.Title >
													<div className='flex flex-row items-center gap-2'>
														<img src={images[key]} />
														{key}
													</div>

												</Accordion.Title>
												<Accordion.Content>
													<Table>
														<Table.Body>
															{Object.keys(setting[category][key]).map((item) => (
																<Table.Row className='text-lg'>
																	<Table.Cell>
																		<div className='flex flex-row items-center gap-2'>
																			<img src={images[item]} />
																			<TextInput onClick={(e: any) => { e.target.select() }} type='text' readOnly value={item} />
																			<Button
																				color="gray"
																				className='[&_span]:!px-2'
																				onClick={() => {
																					window.open(`https://www.google.com/search?q=${encodeURI(`黒い砂漠 ${item}`)}`)
																				}}>
																				<FcSearch size={18} />
																			</Button>
																			&nbsp;
																			(&nbsp;{setting[category][key][item]}&nbsp;)
																		</div>
																	</Table.Cell>
																	<Table.Cell>{(setting[category][key][item] * createCount).toLocaleString()}</Table.Cell>
																</Table.Row>
															))}
														</Table.Body>
													</Table>

												</Accordion.Content>
											</Accordion.Panel>
										))}


									</Accordion>

								</Accordion.Content>
							</Accordion.Panel>
						))}


					</Accordion>}
				</Accordion>
			</div>
			<div className='h-[200px																									]'></div>
		</div>
	)
}

export default App
