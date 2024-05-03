import { useState } from 'react'
import { Accordion, Button, Table, TextInput } from 'flowbite-react'

// import { FcSearch } from "react-icons/fc";
function App() {
	// const [count, setCount] = useState<number>(0)

	const [createCount, setCreateCount] = useState<number>(100);


	const setting: any = {
		"エリクサー": {
			"グリフォンのエリクサー": {
				"グリフォンの爪": 1,
				"精製水": 3,
				"自然の痕跡": 3,
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
				"自然の痕跡": 3,
				"澄んだ液体試薬": 5,
				"炎の粉末": 5,
				"雪原スギの樹液": 7
			},
			"狂乱のエリクサー": {
				"再生の油": 1,
				"澄んだ液体試薬": 5,
				"ゴーストキノコ": 2,
				"自然の痕跡": 3,
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
				"自然の痕跡": 2,
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
			"衝撃のエリクサー": {
				"愚者の血": 1,
				"タイガーキノコ": 5,
				"歳月の粉末": 3,
				"スギ樹液": 7,
			},
			"怒りのエリクサー": {
				"ドワーフキノコ": 4,
				"精製水": 3,
				"トネリコ樹液": 1,
				"クマの血・トロルの血・オーガの血・ライオンの血": 4,
			},
			"看破のエリクサー": {
				"暴風の油": 1,
				"自然の痕跡": 3,
				"トリュフ": 3,
				"枯れ木の皮": 2,
				"純粋な粉の試薬": 6,
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
				"自然の実": 1,
				"血色の木の節": 1,
				"大地の粉末": 1,
			},
			"再生の油": {
				"神獣の血": 1,
				"紅炎の実": 1,
				"赤い木のこぶ": 1,
				"クラックの粉末": 1,
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
			"宝石研磨材": {
				"純粋な粉の試薬": 1,
				"自然の痕跡": 2,
				"加工石炭": 4,
				"精製水": 6,
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
			<div className='py-4 flex gap-3 sticky top-0 bg-gray-900 border-gray-500 border-b px-5 items-center z-50'>
				<p className='text-white'>作る数</p>
				<Button color={createCount == 100 ? "blue" : "gray"} onClick={() => setCreateCount(100)}>100</Button>
				<Button color={createCount == 250 ? "blue" : "gray"} onClick={() => setCreateCount(250)}>250</Button>
				<Button color={createCount == 500 ? "blue" : "gray"} onClick={() => setCreateCount(500)}>500</Button>
				<Button color={createCount == 1000 ? "blue" : "gray"} onClick={() => setCreateCount(1000)}>1000</Button>
			</div>
			<div className=''>
				{<Accordion collapseAll className='[&_img]:max-w-[25px]'>
					{Object.keys(setting).map((category: string) => (
						<Accordion.Panel>
							<Accordion.Title >{category}</Accordion.Title>
							<Accordion.Content>
								<Accordion collapseAll className='[&_img]:max-w-[25px]'>
									{Object.keys(setting[category]).map((key: string) => (
										<Accordion.Panel>
											<Accordion.Title >
												<div className='flex flex-row items-center gap-2'>
													<img src={`./${key}.png`} />
													{key}
												</div>

											</Accordion.Title>
											<Accordion.Content className='!px-0'>
												<Table>
													<Table.Body>
														{Object.keys(setting[category][key]).map((item) => (
															<Table.Row className='text-lg'>
																<Table.Cell>
																	<div className='flex flex-row items-center gap-2'>
																		{/* <img src={images[item]} /> */}
																		<img src={`./${item}.png`} />
																		<TextInput onClick={(e: any) => { e.target.select() }} type='text' readOnly value={item} />
																		{/* <Button
																			color="gray"
																			className='[&_span]:!px-2'
																			onClick={() => {
																				window.open(`https://www.google.com/search?q=${encodeURI(`黒い砂漠 ${item}`)}`)
																			}}>
																			<FcSearch size={18} />
																		</Button> */}
																		{/* &nbsp;
																		(&nbsp;{setting[category][key][item]}&nbsp;) */}
																	</div>
																</Table.Cell>
																<Table.Cell>{(setting[category][key][item] * createCount).toLocaleString()} (&nbsp;{setting[category][key][item]}&nbsp;)</Table.Cell>
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
			</div>
			<div className='h-[200px																									]'></div>
		</div>
	)
}

export default App
