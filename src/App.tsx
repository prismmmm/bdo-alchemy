import { useState } from 'react'
import { Accordion, Badge, Button, Table, TextInput } from 'flowbite-react'
import "./App.css"
// import { FcSearch } from "react-icons/fc";
function App() {
	// const [count, setCount] = useState<number>(0)

	const [createCount, setCreateCount] = useState<number>(100);

	const [reRenderKey, setReRenderKey] = useState<Date>(new Date());
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
			"罪人の血": {
				"澄んだ液体試薬": 1,
				"血色の木の節": 1,
				"炎の粉末": 1,
				"豚の血・羊の血・牛の血・鹿の血・ワラゴンの血": 2,
			},
			"愚者の血": {
				"澄んだ液体試薬": 1,
				"精霊の葉": 1,
				"闇の粉末": 1,
				"オオカミの血・フラミンゴの血・チータードラゴンの血・サイの血": 2,
			},
			"暴君の血": {
				"純粋な粉の試薬": 1,
				"修道士の枝": 1,
				"自然の痕跡": 1,
				"クマの血・トロルの血・オーガの血": 2,
			},
			"賢者の血": {
				"澄んだ液体試薬": 1,
				"修道士の枝": 1,
				"自然の痕跡": 1,
				"キツネの血・イタチの血・タヌキの血・サソリの血": 2,
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
				"自然の実": 1,
				"赤い木のこぶ": 1,
				"クラックの粉末": 1,
			},
			"不屈の油": {
				"愚者の血": 1,
				"自然の実": 1,
				"修道士の枝": 1,
				"炎の粉末": 1,
			},
			"暴風の油": {
				"暴君の血": 1,
				"自然の実": 1,
				"枯れ木の皮": 1,
				"歳月の粉末": 1,
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
		},
		"光明石": {
			"浄化された火の光明石.1": {
				"不完全な火の光明石": 1,
				"黒い結晶の破片": 10,
				"ブラックストーン": 10,
				"炎の粉末": 50,
				"澄んだ液体試薬": 50,
			},
			"浄化された火の光明石.2": {
				"不完全な火の光明石": 1,
				"魔力の光明石の結晶": 10,
				"ブラックストーン": 10,
				"炎の粉末": 50,
				"澄んだ液体試薬": 50,
			},
			"浄化された風の光明石": {
				"不完全な風の光明石": 1,
				"黒い結晶の破片・魔力の光明石の結晶": 10,
				"ブラックストーン": 10,
				"クラックの粉末": 50,
				"澄んだ液体試薬": 50,
			},
		}
	}

	return (
		<div className='xl:max-w-[1000px] m-auto px-2'>
			{/* 
d
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
			<div className='py-4 flex gap-3 sticky top-0 bg-gray-900 border-gray-700 border-b items-center justify-between z-50 mb-3'>
				<div className='flex gap-3 items-center flex-wrap'>
					<p className='text-white whitespace-nowrap '>作る数 </p>
					{/* <Button color={createCount == 10 ? "blue" : "gray"} onClick={() => setCreateCount(10)}>10</Button> */}
					<Button color={createCount == 100 ? "blue" : "gray"} onClick={() => setCreateCount(100)}>100</Button>
					<Button color={createCount == 250 ? "blue" : "gray"} onClick={() => setCreateCount(250)}>250</Button>
					<Button color={createCount == 500 ? "blue" : "gray"} onClick={() => setCreateCount(500)}>500</Button>
					<Button color={createCount == 1000 ? "blue" : "gray"} onClick={() => setCreateCount(1000)}>1000</Button>
					<TextInput
						type='number'
						addon="Custom" className='w-[200px] [&_input]:text-right'
						value={createCount} onChange={(e) => setCreateCount(Number(e.target.value))}
						onClick={(e: any) => e.target.select()} />
				</div>

				<div>
					<Button color="blue" className='whitespace-nowrap' onClick={() => setReRenderKey(new Date())}>Close All</Button>
				</div>
			</div>
			<div className='' key={reRenderKey.toString()}>
				{<Accordion collapseAll className='[&_img]:max-w-[25px]'>
					{Object.keys(setting).map((category: string) => (
						<Accordion.Panel>
							<Accordion.Title >
								<div className='flex gap-2'>
									<img src={`./${category}.png`} />
									<p className='font-bold'>	{category}</p>
								</div>
							</Accordion.Title>
							<Accordion.Content>
								<Accordion collapseAll className='[&_img]:max-w-[25px]'>
									{Object.keys(setting[category]).map((key: string) => (
										<Accordion.Panel >
											<Accordion.Title className='!p-3' >
												<div className='flex flex-row items-center gap-2'>
													<img src={`./${key.split('.')[0]}.png`} />
													{key.split('.')[0]}
												</div>

											</Accordion.Title>
											<Accordion.Content className='!px-0'>
												<Table>
													<Table.Body>
														<Table.Row>
															<Table.Cell colSpan={2}>
																<TextInput sizing="sm" onClick={(e: any) => { e.target.select() }} type='text' readOnly value={key} />
															</Table.Cell>
														</Table.Row>
														{Object.keys(setting[category][key]).map((item) => (
															<Table.Row className='text-lg'>
																<Table.Cell>
																	<div className='flex flex-row items-center gap-2'>
																		{/* <img src={images[item]} /> */}
																		<img src={`./${item}.png`} />
																		<div className='flex gap-2 flex-col'>
																			{item.split('・').map((v) => (
																				<TextInput sizing="sm" onClick={(e: any) => { e.target.select() }} type='text' readOnly value={v} />
																			))}
																		</div>

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
																<Table.Cell>
																	<div className='flex gap-1'>
																		<p className='text-white font-bold'>{(setting[category][key][item] * createCount).toLocaleString()} </p>
																		{/* (&nbsp;{setting[category][key][item]}&nbsp;) */}
																		<Badge color="gray">
																			{setting[category][key][item]}
																		</Badge>
																	</div>
																</Table.Cell>
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
