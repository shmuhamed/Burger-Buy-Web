let burgerslist = document.querySelector('.burgers');
let orders = document.querySelector('.orderdburgers');
let total = document.getElementById('total');
let subtotal = document.getElementById('subtotal');
let taxtotal = document.getElementById('tax');
let itemnumber = document.getElementById('itemnumber');
let burgers = [{
    name:"Chilli Burger",
    image:"https://www.seriouseats.com/thmb/5DpGTCqdFbgvpFIrqRqfww3eZy4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2013__06__20130611-burger-week-grilled-burger-variations-13-d5217d9167b54ef5be8f3e4a57442813.jpg",
    price: 15
},
{
    name:"Kubie Burger",
    image:"https://cdn.shopify.com/s/files/1/0372/4188/0621/products/KubbieCooked_1024x1024@2x.jpg?v=1598661751",
    price: 25
},
{
    name:"Nut Burger",
    image:"https://tastykitchen.com/recipes/wp-content/uploads/sites/2/2010/03/Nutburger.jpg",
    price: 19
},
{
    name:"Poached Burger",
    image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBcUFRQXGBcZGRwXFxgXGhwXGhoaGhcaGRoaGRoaICwjGhwpIBkYJDckKC4vMjIyGiI4PTgwPCwxMi8BCwsLDw4PHRERHT0pIygxMzEvMTw3MzE3MTExMTExMS8xOjExMS8xMTMxMTExMzEzMzMxLzMxMTExMTExMTExMf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBQYABwj/xABBEAACAQIEBAMFBQUHBAMBAAABAhEAAwQSITEFBkFRImFxEzKBkaFCUrHB0RQjYnLhBxUWM0Pw8YKissJTc5LS/8QAGQEAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QALhEAAgIBBAEDAQgCAwAAAAAAAAECEQMEEiExQRMiUWEFMoGRobHB8HHRFFLx/9oADAMBAAIRAxEAPwDx4UtOikipAQUppYrooAHTxStboqJpQBGNdRbydaFQB1KBShacBQAmWmlaKtI4oAFFOilApQtACAU5RSgU5RQBwFLlpwFS8JgLl0xbtu5/hE/XaobSVslJt0iHlpjLWq/wTi8ypkQs2rKjhigAkm59lR8d9Km2+S063WcjdUUDWJiZJpE9Vigrb/kfDS5Zukv4MOBTitercL5Xw9pTdYW4AP8AmRcbWdAhBk6GNKDcwuDTMBYBj3SVQR3LAAz6TWeX2hBdJmiP2fJ9tHl4Wmsteo4z2NzKhw1kquWD7NA3uiQWRRMknT9KY3CMFcBb9lCQQDlLQZ6wCKla+D8Mh/Z015R5gFritem4rl7hi2Q7rcty5UvbZjlgbsr5gBPX12qFiv7PgzZcPddpUEG4igSfsko2YbblY1rRHUQavozy0s4uuzz4ikK1pOK8nYuwAzIrBgT+7bMQF3kQCNxWfZYMHQ9QdDToyUlaEuLi6YLLXFaLFcFqSAOWuy0crTQtAHIlNcU+aG5oAHXUtdQAldS10UAHppFKKU0EjYpwpKcKCBTXLcikNMoAV2mh04iuigg5RTiKVVp4WgAa08rShaKiUEkfLSxR2SmRQAyK0nLnKVzFB2a4tlFXMrXATnPZQI07nzG9WHAeUHawuLNsuS4VLRHvKTBeewgmvSE5fYjwiIG7ECddY7CufqdXKDUcav5N2n0sJLdklXwYLgnLqW0DXLYa5M75gB0EbTV/gOH3c1xpYqSqqohEURooH2mmTWjwiYdAxbWDGsQdp8Xaq7mW9ae2+GRveIZiIIBk7Gdx+QrmNzyPdOXD7rmv9HTThjSjjh119QlvBKBlLAGMzuVOhB9xfvbawN4oHCuDpaujFKrF4JEuyToILhd9Oh/Wnnj4VEXRyIUs5gtAiW8zrTrvOaLC+xUbSc40B6xGpjzpsFX3eCk3J9qwVzAmXe/e97xuzE5RBgASfCBmAA7UDGcKg+UTmjcHtQOKczYfEW3t3LeVCCDlbxEAyDtvoNNqhYXmZURLYVfZ2wQoYlnjoJnoCFnyqksVpvyWjkkn1wR8VhirRrrt8/60qBlIyyNupGo1In7NWeF5gwp0ZHJM+MFfvTAkGKJdx2BaHRnUgyc3iWdpYR37dtqqsbJlm+hHucVzPItoikQQkkBtw+p38XQdNasbPF2COEGZyIClsoY9BmOwkD0moWF4OLzeC5bI30MSe8an4VMuctXRBVlOm2ogxPXptToymKk49EjgPFLl5Ga/hmtZDBJcFdpGxmdO1E4hwTA4w5btvLcPhGYZG06q439J6iqhrl+0pt3VYJmkGNzJPvDcb6UbhrrcJ9ogDz4WLNso0MdwJ36x2imxz0+qFPHuXLso+N/2VuiPcw90vl2tuura6gMIA+I1rzu5ZZGKOpVlMMp0IPmK+j7OKN393mhxDA7ERDKfPYfWqXnLlJMbbJQKl9dVePe/hJH2T9NK6OPLuMGTFR4Uq1zrUrF4K5ZdrdxGRlMEEfgeoqJcenmcjuaYaVqSKAG11OiuC0AIBS5acqUSKAEinRRAlECUARitcKk+zobpQAKlC0REp+WgAJFIFp5FcBQQKFropRTqCRgFGSmLT6CDnNbrknk5njEXkhZ/dqd9PtEfhUHkzlZcVlutcgC4AUAkwIMk9B5V6/dvqgCLEAfaMT6dqw6nLuThF14bNunxNNSa/wAf7IVy6lhCqrqgzdO0n6msljuY3ywbn6+k1ZcTvq5zZLbJJzdCddfOqTHW+HOSJe22chgpzBBEyV6j0Nc9Yb7Z1Iquasp8VxnYZiQPsgmJ9KjLxcsYRWLawIJq1wnCER3fL7e2oggeAHMkq4YagCZ1PQ1FsWMRdJOZ7aQVAtoFEdddyP1pyxwXBLt9BMBwniGI1RFRJjM5AAOh2EmYNN4xyfirIn2gaf4GHwnXvVzwfCXbQyreuake8ojTr7wrS4njwYlLirBTMSSYLKQDCwe809KNe3sTJzUuejxrD4LE3GZLaO7IJYDoPj67b1BuM6nxAgjvXqt/mG1btfurClmYtcBEK3xXUmIGuwFUGI4vgLxy3bRtMdc0AjzGkfMxRHKn0rLSxyXMuDDrinXUMakpj3jSfUVaYjguHYn2d9SI6eLXSJCklRv0P51Ow3J7lc0NkOqsGtt1yxBdTMg9J2pj2NXQqpJ8vgrrPHXQ6MykDWIHSCKveG833l8Oa4cpI0IeT1OpM/hVLi+DIgLC8ogxkuDI+8e7Ous7bQahftNtdDrHUdaU8cJfdRd8dm3Tmy4XLvccrvlZBk3209Nx51OxHMochhatFYmZbPMbZgZGveayPDuLKoC+08MyEue6J3jtWjw6YW8pYqocqyl1gxIIzCIBI0jrp51nnHZ30WUVLpFnw/mGyHV4uIxIRkYhwAZlluCJGuxE1rbmLZSpy5lkSykEQdj3javHLvLeNRtPGp8QZTmU95G4PrV1wPmXEYUG1iLZyHQmJA769DTFFpXF2voLnBeO/hm1504AMXh4UgMAXRjEZhoAx7GYrwm4nQ19AcvcYtuMoYsh9yRJA9ev/FeUc/8AAHwuIe5lAs3XZrRBG+7KRuCCTWrTZFJVf98nP1EHF3Rj3Sm5aMTXEVsMwDLT1SlI1p1AAzSZqUrSZaCCStFBoa04mgkItNdaRWpWNAA6QtTjTctADDS0pWuAoIEArccochjGYdsQ942xmKoAAZykSTPxFY60ACCRI6jvWy5c5o/Z7T2ig9mxLKqnUMeonppSc85QjcVyatNg9WdD8Z/Z2y3CLeJRkiVLAg+hjSrPDf2c2lA9pddzoW9nAHc5epqPw/iV28xFvTQv4j0H51Ow/EcRaS46lG2UjNDKTMEDr1rCtZPqR0n9nxT4LUPh8CrJh0HcNJ0O0t3O1Ynj/EHutnLme2YlflsKk4q6kxCm43idnGZbYgxoTEkiq0KjAwFJO9y4Sqn+REEnboKhOU+aNcMWPEqIi8WdVKEGdYO/161CtvcdvCGZz0UEsfgNaul4ZaC/vDeZt9ksW4An37hJ2jcDerHC4jPbNqzbtW0eBAd2ef51AnzmdqY9sFbKPJ/1NzwpVt4W0b6pmyKtydR7o1J06QYOgJNW7cPtlNAIGq5eoOp+Z6+deeYnht97a23vDKggKJSPXQ5thUngeOxWFcIx9pZgDW4C1vzXNuu2k6CYrPDU4nLtGaUHVp8hMVdUFm1AUgEeZnp8O1U3GuI2zbBDeIEZY6RvPcESIqfzJixNxFylWbMrDqRsQRvoSPiawuMckGfrV4ScnRtUFs3MnJjpECPgQY+IqFjsKzwwRtt40377VAUMpjMAZ6eI/Kj4i67jxZ3I0GYmFGw00jToKdHGou0zPk1LnHa0C/Zh9p0X4lj/ANtS0dmAUXL7KJ0BFtdJOm46sZ8zUVLDmPCB5iPx3qZhsC7HceZOtWlNJcsyt30i2v4fCPZyWw63Spcs7FiMqlihI0aYgaDU7xFZe7ZVWZSZIMAjQHz1rb8I5czhnLzlEaELBbQSSDO5061F41wX9nu5Sgnr136kzvS45/PgjbzTMotohtBpuAwBMfn8Kl2MSytK+FhuVLIfiOtSsawVdAN+usVDGLQmPDoPtCVPXQ7jtV4yc1dDPbF8M1XCucHQZLoYiYkASAdycuvnoOtbnCcTtXEViq3EbVTpqogGJiTuDMHWvIRftGAVYf8AcPzFWfC+JGw37ts6t71piVU6b6yAw010pE8Mk92N0/0Y7dCSqXP7npV+zatOGsKLYfxMpnLmJnTsYmYqNzhwoYy0lpgi3YZrNxSWEj7DExlzd9aBwXiXt0JtqRlMMrjUExppuK0OCvXBFt0IVxlClhqCdTG/U1SGZxye6NP5FZcK2UnaPn3EWyjFToVJBHYgwR86aDR+KWPZ3rtvXwXXUTvAcgTPlFRRXYOMFUU/LTENGmpADFdNI7U2KCCUyUOrG5aqI9ugkEDTlphp6UEDwtIRTpppFBIhporiK4CggeDV1wi/aKezdVmc2Y7+k9qoq4Gl5YepHbdD9Pm9KalVnrfLWBtw1wBYywCNYnegWsKj3GBYhAczabxoNNtzGveqvlsvbwWZSYYkkjp61qMKqs2Ft29yrYm4w1Ph8NoE9szbeVcuOJb2pdR7+p2pZ5OG7y/0M5x5UW4oYJcuDS5GiB41CgbhRCidPD60O1wxMq5GuBrjSWDL4QBJySsrGuoNW2N5bOZMrFnMjJ7zSxJNxj5k7VIvcu3ke0hWV7qcymN5P2Y0Bms+TNJ3KN/3wZ5TknVmc43wTDWoRbly5szFm0zlZJ0947anaq3h95rVwG0mYjRU1MzppGs16Ra5StQXxDFmMsyg5UEk7RrsR8qkCxgsGguIqjNoHALsZiAG1MGdqHKTi93P0FqUmyjwmExV5C74U2o+yXGY+YXKCB6xVViluhsv7Pen+WfqNK1nD+Z7L3QjPldmyIOhnb06D1q/XLuDm1OnSsscau6r8xjk48SRh+G8mi7luYiUGhFtYzx0zN9j0GvoancY5Swxt/u7CKRoNASfViJJrT3sRAAYis3juZra3MiAOeusRAkgdyYj160+5yW2HYKck9z6M5hOUGmSunbQVbf4atKsuAB5amipx8XV9okqh6HQgjcHzquxXFWMzqo1g+WtZJzzOdPwaLtWNvcvWBBBA6gH6Ue/g7C2i7xbt29WYfa8vM7abzWP4lxu9fDOkIoOUMD4hlUE6HcajbX861OKMyi3ecMBJIcwpBMjbeMp3+9tXRxaPI0nORnlljdIsuGcwrnuWkBVbtwvJO0aqCo0FXXHsRmZMzTmVdRtKrAkntMfH0rC417bMptgLpBUTlEdQSZM9vLzip37XFtVmGRss6agjSfTKddZny105NOm7i/BSM/kFx+zlZVDCHUt/wBxEbb+H6iqy3gz1HT9P1o/E8SXuBjrAAEj4x9frUh8VLK4WAVAYCTOsfA6D6VojcYpCuG22VbAgQJEdfKpuAwrXBq5A2neBBJMddojzp961owImSe+2bzoduVAA26T59aly4LRjyWv7PicKiXUugI+3s3zga7Oh227da9S4E117du9ciFUEyRpMaz90715E5ytBEwYOumvWtrwjG3bmExGFz5jctO9tQzAowI8GoM7bTtI00pE8aycN0/kY5OK45MRzQ6vjL7oQVa6SCNQdtj6zVSVqU6ESCII0IOkEdKAwropUqOS+XYyaXPS+zNIVqSBIp1JNdNAFy7VGejnWhstBJFZaei0T2dOCxUkChKUpXK1czUABdKGRRHahmgBpFNpxNW/AeXruKPg0WYLH8qhuiUr6DcvcduWgbMZkc6DsT+Vek8o4ZlS7cWA7sLSNuMqCWIH8zH5Ubl7km1YQuwl495tdYqutY44XE27B923b8WsA3HJdsvz09Kw6hJxco9nQwSlt2SNzgLFq2ZUhnYwWJ8ZaJ+1v1rNcb4hfS5lsOiWwjBXYqfFmiN/eLGM2o2rK4y+fbsfaMx9qHVhm/dgQVIHQgaedRsdx12xbWiwFtsygDVcwEoRMwZ7fA60jGlStfgM9N23dltiuO3L6+O4tpC+QqxKuwILAldSATbPmOog1BxjC25IuNdCOCiq4cyyezPhCsTC6jUb6ZTVVeuJdvw6i2ikG45JLMBlVVEyq66xtrrVpjMWVIso6lA2Zm92cozqe+hWMpnQjodXLbFUuia5M7c4tde4luxJYKbSLENlnMNTquUDfSINavgHEMVhFcOwvZrhAUllYENllWYQVkHy0maxPByVxBRpGclC66FZ0zf896uv76yhsOHKNmVc6iBoW1QDyYDL3nUVWcItUXV3z0aPE8xPcYeGDmdXU6EFVzQXGkmdI9Kzhci4xUAIQ6qW1KiVY7jqSYHXrpvL4bZuLbEi5lYgrmt5RvGsDUnqeyLrpJqcZee5mUhiYIIUSM2adDBMRI+GtLx7IWkwlFvwc+NCPlRjk1kDRc06kDse/wDzUfG8SecqmAd/SoJxZXwlRIAXz30gfIfCrOxy9ir4BWzkEaltCfh0FEoQUt8iE3VIr7t9NLaqIBJJ1LMTGpPQ6DbtQeJlSiDIJkwx94AGSCeoJafnV+vIeL+ywX1IA+MVNt/2bO2t3E69lEx8T+lWWpwxd7ik4tqtpgnvKu0TUc4kzNejXeQEAy+1DHoDofhHnVDjOS7tssRlJWTlbaB2119KZj1WGTq+RM4ZPHRmkVjBMgH61Pw1i448C7aAE7jf03/3pWm5e4I95RnUMFnWNdTOrdh0Gwk961/DuUVEsWAjUhfE3/SoEnfWl5dWt22KtjY4qVyZ5ovD8S0DINOlGbg+KzKjW2RjAUEZev8AFAr1nhGGCOnd9AGVZKmCcj6jN5aEVk8Bxi4t98PcV2J9r4by5gLgykMnXKWD6KOtRhnPJFuqfwEntdJmYxPCb2dbQXxEgaDQmSMxbYaedTsGj4W3dLnx5YRphg2bwxrrp+NejcGxdu4sXbaIyAlmWHDCR4QZ+yCsnXf1p/OHKK4qwr4fL7RAXUz/AJgjVDGgOgg1fHvctsqK5MiiuDxZwWJYmSTJPc063hpNFZI02ouHNdE5wK7YAFVV/ervFbVS3F1oIAUuWjJbo2QUAGt3KIDNBtJUpLdSAqLTXSigUjGgCMaGzUdxUZqAGzTgtDJqbgOH3bv+WhYTE9KiwXIfg3BLmJfImgG57V7VypwNcNaVN46nvUDkzgIsWwSPEdSfOtXmrJkyW6XRrhjpW+w5UEQdqzvNHL1m+tuWCMjCD94T4lPXUdelXgaq28xZ2JEgEKvw39dfwrNmybYjoQuQG/wiwyj9wrdBA1gee8RNC4hy/YvWxlVFKgZToMpHUGsJf4liXuXbNxrngZmUhsumU9gdPe0qp4dzPibee0rDISSFYFcinTwHc6nbqfWs6wScdy5+g7lPs9Aw3KllSXuBmJ3Dt7RW03yhVWRrEg7+lWF/l7BuuY4dcxnXYrIAERtEAQNIFE4Fca9YGYguvhfUHxLoZ8/Kpl0sg1AjoBv6+vlS5ZcsW93VURSfT5PNMRy3kxDtbzhcpyEwy59YJkyVmNACau+EcuBj7S7YS5dLZmdwAuh8MINhHfU6/C6uvmZGKkCfe0EA7mrS3eRQJYADz/GlxzZH7X+Y6fHKFJhQrBdoMAAHTtQcPw22g8FtFB00UCB2AApTiUeYYGNB1mod3iGQFfdO2uk9vnSm5N+7lFUnXA5sBZz5sqlu5UafSpN10RczED1/Ssz/AH9btkq7gnWB8ZMfOs9zfx03LWRTEQdOuoO/wohibnt+SzurN6t3Ps3SfWq26+jeyuKXA0DdxrAjvWFtcTu2MGQM5a47FGZjooUBlHxk/wDVVPhsQyRcW8xdjGUmY6iZ767dqdD7Pabbd/yVeVPo9EsYt7llHugyjNCkBSI94En7Jk6TuB2q44ati4lwHrsT41WDoSBuMwMk6RHx89w/MN5lSXkR41IjUHbU0p48FdblsZV8eYaGCD7unSCfnWiOPa9222uBcuVSdWa1Lnsne0pUzqpAIEtr16ayPIisjjuZMSl0quUOnizBo0AJ0M7xO1Sm5itFACjIehiYk9NfOY0rHqJQ7Zp0gAgjY9Ne4qcOBOTnNf4+gTcqSTPTeFc2ricLcRwWuqA6xuPGqkyNWIzgwNdYkTQ7XHbOIAt3bZtG7fayzwGFuWZlYNGUOSRJB0aWIIgViuW+KewVyoYsATJJIByFemg6a9gRRMPxRDdyuzBSwunZlD+z+71OlsT5Nvoa2wqPCFvHbB/3rfw95mjM+d7JBk27gUezcQDqCIEDyre8J5nVQ5VjbtIgzW3PiDFQVVJIPf8A2ayV5b168i31yhHW4AmVngwDmMkZsqgwT2rXK1rDG6+KtB7eIJyNAJYe74yR7x+WtUybXx4/Yb6cuOLfj6nnHFMWLt27cVcod2cDtmJNAt3Iq2HLzX7lwYZ1ZQSQp0IUnQGkucpYwELlTMdlDakDc7bVrjlhVJmGWnyp8xKy7cmoTpV43K+MUMTb90SQGBMDcxVVewl0f6b/AP5NXU4y6YqWOcfvKiGWpPaUr22G6keoIocVJQ2Nrl9h1pzcBfpW4ypRLeHB2FZPXkbfQiYQcAemvwBu9egjBE6AVJt8ALDxGKPXkDwwPLLnBG70G3y47tCyT5V7Bb5btjVtfWp2F4batmVUVPrSK+lE8Yu8nXliVavUuVOBpZsqpXUD61oWRD0FOVgNqrLI5cMmMFHlHBABtToFMa6BuRQnxSbZhNKckWDEVRcX4gMP7QmS2X2iCJ/hJHpp86ubVwNJXUDeqfj+IswLd622VpGcAwmn3hqKVklBrlllJRMTd4nbxRQ5QrZCHHUsTqR0XpQW4eYUKfZFSQTbhGKZCSrOqsQ5OTR/ujbqTivKQt22v2cQHVmCgGAYze7nHTXeqlbeKtgi4RlLM2QuysvhEsAQAfCCJBMzTMc1XtHR96vwWPBeOOjqoy21NyCbYyIRbBG7HL7rKCB0AO9a1sc4uaOHQiTOXTaNR11ryrEh7aB3cqmaFGQODrLZC2gOq7dCfQyuFcaVPaOujGVCMTDKRplO89IgdKXk06yNSYxUrSNdzPzGchS3opIUxuFGhjy/QVH4Rj0zxnK2wASGJctmOXc+ZHlWct8xJbBT2AfKIU5gxEjUPpqZ/Cp9viVm5hS623FyYZUBMEN4TO2s/XvSnpqVNX9S+5eC6ODb2jMHKWreog7kmSB5xVTxni+dsqMxy7lvL8zQzfxF4Q6GwIIBcwD1E5gJ19TVfguUsRii2Vg5X3ip8KgzEs2UGY6SfKiOCN+59ESclGysx2NZ3DLJ01n9e/l1qRg1BdWue4NSO/l6UHj/AAW9hMqORleYysWnLl11AHbaqpBeZcqh2XyBPWegrascXFbWZ3KV2+S641xQ3iYXKABbVQdAF2IHTb61SBzI+kabfjSthLu7KVnedD8qG2HI3b5TTIpLiyKk+kW+DuIZD5gpHicahY11qHfxoYZRAURB227kUC0sCO9ETDpqTOmwH/OnrVVGKZaSkK+JAImDl1ymYOgESNdoHTahJxFgIAHXp3pb+QhVRIInM0kliT6wAB5d6Ng8Ap1YkDyFWexLkIQnJ8ENMx2G/wDuK2vCODSMyorB0i491YUMR/p6yCPUkxOnuiNgTatj93bGb776n4DYfWrI4w++7wB9pjA9B+grLkz3wkbMen28tmp4Hh8PbuSVDEmYAK219F3PxrR8y43Cm3luMoYAsgAzGQNBA21+FeXY3meRltCO7t/6j9flVZbxzs32nc9pZjUKc4warsZ/xFkkpylVG1fi9sAgL06DT60B+NMo8KgT31NU9rhmLYZhhruUAs0oV0G8Zok+Q1q5wPL9y6qsbtoSB4SWVhI10IEka/Kskt9W2OeTBDtlpwrHO48ZlBqVAAB9YGtW1sWnHuCrDl7hSYcFS4YtsCI0/Op2M4NaZWKDI8EjKYk9JHWteGNx75ORqc8JZPauDM3eGWGPit0z/DOEOuQfIU98NejxAiN9KH7K596rbmirSZom4dbJmBRkwdtegrivhmaqm4zbBIadOo1q7aKcsuFtquwpWu1SHjlqQJbXrGnxNSlv5hKkEdxrRfwFfJMZ/OmG4Kis3nTGfyn0qCwZsT2oT3jTDeA6U32ynpUAOs2RcJe4GZLY0AmCZkD9aosfduA3LiJCAgOxMDMdMqjy7Cr3GrOGKpcNuXlyJJYQNARUTiTW7llMMgKuAXUNKliAT7p1JbWPjWDO420u/wB2Zp8tljy3eZbQe4QVyliex6D1is/xvj9ts4/0/n8abxm57K2mGzhdASqaiT3O5NV78CDZHuNlw51uMSAxj7IA77D49qV6jlFQ8Lspbul+JXYS07D2iB/2cvENs7DqqbsB1IpLjlAQDH8J1HxVgR9K0/Cr9vEYpfARatKSqx+7tpbUR0iZymPOgcwXMILSMWcNeBu22tqAcp6MBEmSCc3U9xTI7qtLg6Gl1MYLa0VeBfCusXsOrncFGyD4rtPmIqBibOFnwYVI/ibNJ89oo/DsGblp2FxQ6t7rW0koRo0xp4tI1oGI4deUZi7ZR72uSOsZZH0qzzNJRs2xy4ncq/VkdbduSVsWh6Wlb/yBNOa++ymB2WFHyEVX4rDh2UTnBYAjU/Q61f8AC+XMRc0t2yBpLNoJ070NSl022Vetxx6jRX4LBG7cS2zhM+gYidY0Bkjc6fKtna/dYZbCWrwdTLnJ756tv1JIGuwA6VMwfKeHsJ7TEsHCLmIOiCO4+1vt5UuPu3Wbw28nhLWi3usWt+EE7KcwGnrVM8Zwhz+Rgz6qWZ14MXxLE27nhfMoGwZc8EdwTIb9BUZ8Jbbwi6BpKvlJVx10ElW9QNqZig7SWdmc+9n1MzOo0j0+lNw14W2UqJM+KdvOD0+tRBuMfaLjHNH7pX8RwRRc0h0+8ARHaQeh7/0mjupNej/tgvQgi2MrBVUBYJEqc48W4Ij+KfTuH8LB9qwi0RZVDcAF2WzqfaBMwkwAGGsjN3M6MGZv7yo1+rNR9y5POcHgLl1sltGuN2tjOR6xoo8yRU/BcvYy4GNrDMwSMxYgHXshIJI+Neo38XbS2yJiGYCAoGW0dTsq20URrrP9Kztrid60CFfTMSJE/wCx5UyWq2yqrRVb589Gavcl4tC0i3KwdHiZUMIkAdY9R21oGE4HezqLqm2hiW0eAeyqd/WK0eIxTtJkk/oIA9NBTA+utKlqpSTpDoxkl2PwvLllmYDGogBOX2lpwYnTMSQoNXmE5Hs3R4ryXWjdGBgayNpGsVW4a2GE5h5ilxOHQMjiFdJK3FJDL0OVhqKTHUNP3Cpwm+pFlwflfBLeNl89q+raBbhIYFQwUNsSN4gb9YrRY7CWEEJdIuATGZTnA76a9PpWExWJdnLszFyZzE+KREEHpED5UbGFb4/aVcLchRctxlOfq6xoQTrVnmuLTV35fZmzKcVbdlvi8TecF0xFyV2WQF7bACetW2AxXtbfs8SB44FssMxzFcwYHtoPiYrGcKdwxA1kgQeusmttfx5/ZjmC2yCotsPUHTvBFZ4Qbny/78MRjTmyzxls5bYVraxoROUTAiImT5VDv8WCuqM8Mmh1kGfPqIrK3LikKGfMFnLOp13OtAa07e6PSRXQjL6GyOGuzVPilYmLm/Sab8RWR/ZsSNfwAFSs2J+8PpTUydqKU8ZvqCq3nA7bj661Au43EHX2n0p2eDqCPPekNoP9v8o/Om7UV7IV29iW2ut8IFSsDxPF2iIcH1MH6U/+72Ozj06/Kmvw9+rH5GaKiRTLhec8So8VtXHrrTDz/cBg4bSqO5gGG7n/APJpi4RyN2geUAVNRCmaVP7QbZ96ww+f5UQc6I/uBV/mLfmKy62GG+b5f1pXt6Dwn6VVxT6YKzW4fnJQd0kfduZT/WpNnmKxmDlDn++YY7QfETO1YdsGp1K/PLTP7vTfIsdRp+lUeFPyH4GqfEW2JYXJA23k69RqB86h8w8ce6iJ9hBCquoHmdNaobeDtrqoKnyYj8KW7hy+7ufiv6TSFpFGVplfTj3RruAX0t4dkvM5Fwk5VUwgiAdBqTv8qreL4ZUW1fQyjyhJOxU7Qdh5VRrw9l917g8wV/pT2wzsMr3bhG+Vtvxq3oO7scpKqSNPwU3FM2xmziCPvA9J6VsLuCtuiBhDlM6qd5mSN+oO38JrBcExYw8QzMN4PiE/EiPnWgtcxrnV5ysq5QPZpoDuJzTQsVeCW7LXhXAEtYovllRaLDNoAWYAxPUCfnWqW7oYIAneRoPeJ/H5ViMNzATcUXLlvITro6kT2WGB1ifEKDxrj1oLdy3k8am3lzhPCRHXy6CltyhJRjF8iJQ3NtsBzTzMMQRaSRZVtTsbkfajoN4Hp8D8e5ts3U9naRhoMjERlErMfdMAgetea4viuvhgjvmX9aE2O2ykMfJlH0mmPDOXfkNsEzSrDEknXqaBlInx6dulV1lsQVlbeh+8V8XpJ1or2scVg4RvUEbT61EdLMb60UWCXRoVYyN6mW8QQPeOu+vzmslcwWMBn2Nwegn8DT7VnHH/AErnxU1MtG35LLOjWI4IJG4/Kol3FSDJ9fI1T2kxYMeyaf5X/Spn+HOIOsrhrkHUHL+sVRaZpkvKgrYsREn1ppxY2J/rSLydjzE2riyO1vTvqbg/Cp+G5LuqALmGJ7s+KOvwtIQPnTP+PFf3/wAK+o2REx+Ukzod9fpRL/GLY3cA9NavbXJibnC2/jfvsPqwFBfgGEtGXtYMf/ZcJ+j3aW8UL5T/ACLbpfT8ykxPFEjces96fgMTmU5FuPrMW1ZwdvugjpV7Z43hLPufsS//AFpJ+aMaI/8AaFaXZw38tu5H1YCqrEqpRZXJHeqbF4baurlIwlw6yZRkIiJhnga+IfCfI6DieAe+yGMiqo8DEe8SxJ8IjrHzqgwfPIvFgoRCPd9oQubvs5YDzirJ+Yr6wWt2yOkZoPo0wflQoKD54KwwqPMSdhuAMuoyn4RUp+HXejIvnE/jVdh+bUOj22X+Uhh66xFHuc02h9i43rA/OnRcPks1MceEMdXun4L/AFrv7nt//I3yFQ7nNKfZsn4t+gqKeZbn/wAafWpc4oFCQBcHhbsE3II+94d42nTrSty/bALKwI208Uk9FiurqelwVZDfgTjxCQBrJ7a7wYoNnPLBbhYdlBYA7dBrSV1VfRZEW87qZyhgdNUI+OgB+tIzKwnIQesEgR5A6nQV1dRZA+zgLVyZZ12iRm3nczpTn4FaBhb09pBHrtPY11dQTSAXOBhf9S2fiw/9R+NBbgLdHQ94dSfjrXV1SRtQ7+4LmgysehIgj4ECnDl+70RiPIT/AOtdXVDYUOHArg/02Hqv9KIvCbq6hfUeLX1ANdXUbmCihi8Oug/5fyzCPhNETAXB9g+crp/5f71rq6quTLKKDjhzR/lkk9lHz90x0rkwTAwbTSN81sx8wK6uoUmDihbmFI/0wSe9o/mtMTDXAdLSTH2rax8QRXV1TuZXag9m1d1BAXqAqoAIOwJUkHczQbmFun7Nv/qtqfOCVANdXVO5htQlrhYOYNbUmJ/y0aPKSoBHnvpRLPAk0D2rbDySDJO0QBERrPwpK6rIqxj8sWCxiyunTIdekyrafhRMJy1l1t3Llo9rTMsfEDf50ldQyS0SzjrcZca8dPaBbn/nbn61KN/iJQqL9rX/AFFsjOPTXLrtqvWurqldkSiqKS9yfcuMXu3Lt2feltTPrOnlFR25GQHQXInbw/iINLXVEiEJ/gi2ds69pGb4ada5eRBBkekkj160tdQWsG3I6A6lSN9SR/7/AJUa1y6Lf+XiQkfZFwqPiAYrq6jtckKTJbcRa2Mr4mwf5lWfnEmqbF8WTXNirfpbyf8A8V1dUxxRZX1JFa/FbDaHEXj/AC6f+IFQnfDEzOKPnBP1mkrqt6cUQ8kj/9k=",
    price: 24
},
{
    name:"Steamed Chesse Burger",
    image:"https://www.framedcooks.com/wp-content/uploads/2021/07/steamed-cheeseburgers.jpg",
    price: 32
},
{
    name:"Theta Burger",
    image:"https://www.tworows.com/wp-content/uploads/2018/03/theta-burger-restaurants-allen-tx.jpg",
    price:21
},
{
    name:"Pimento Cheese Burger",
    image:"https://www.belbrandsfoodservice.com/wp-content/uploads/2018/05/recipe-desktop-merkts-pimento-cheese-burger-1100x570.jpg",
    price:30
},
{
    name:"Green Chile Burger",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_yU56ymCewHQ5y9AnTOKslPv8_EZLupshA&usqp=CAU",
    price: 28
},
{
    name:"burger",
    image:"https://avatars.mds.yandex.net/get-altay/7760835/2a00000183bb8133c9175a29748062c6f81a/XXL_height",
    price: 17
},
{
    name:"LA cheeseburger +fries",
    image:"https://ca-times.brightspotcdn.com/dims4/default/3e070c7/2147483647/strip/true/crop/8037x5358+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F13%2F97%2Fd5863d8d4286b678e5070cd6c469%2Fimage0-5.jpeg",
    price: 15
},
{
    name:"Kombo Burger +fries +Cock",
    image:"https://media-cdn.tripadvisor.com/media/photo-s/21/03/6c/a7/caption.jpg",
    price: 25
},
{
    name:"Chicken burger",
    image:"https://www.modernfarmhouseeats.com/wp-content/uploads/2023/04/crispy-chicken-burger-1-500x500.jpg",
    price: 9
},
]
burgers.forEach((element,index)=>{
    let newelement = ``;
    newelement = `
                <div class="burger">
                <div class="image">
                    <img src="${element.image}"
                        alt="">
                </div>
                <div class="title">${element.name}</div>
                <div class="bottom">
                    <div class="price">$${element.price}</div>
                    <div class="cart"><i class="fa-solid fa-cart-plus" id="${index}" onclick="ordernow(this.id)"></i></div>
                </div>
                </div>
    `
    burgerslist.innerHTML += newelement;
})
let orderedburger = [];
function ordernow(index){
 orderedburger.push(burgers[index]);
 orders.innerHTML = "";
 orderedburger.forEach((element,index)=> {
    let neworder = ``;
    neworder= `
    <div class="burger">
   
    <div class="icon"><img
            src="${orderedburger[index].image}"
            alt=""></div>
    <div class="title">
        <h1>${orderedburger[index].name}</h1>
        <p>$${orderedburger[index].price}</p>
    </div>
    <div class="delete"><i class="fa-regular fa-circle-xmark" id="${index}" onclick="removeitem(this.id)"></i></div>
   </div>
               `
   orders.innerHTML+=neworder;           
 })
 cashcalc();
}
function removeitem(index){
    orderedburger.splice(index,1);
    orders.innerHTML = "";
 orderedburger.forEach((element,index)=> {
    let neworder = ``;
    neworder= `
    <div class="burger">
   
    <div class="icon"><img
            src="${orderedburger[index].image}"
            alt=""></div>
    <div class="title">
        <h1>${orderedburger[index].name}</h1>
        <p>$${orderedburger[index].price}</p>
    </div>
    <div class="delete"><i class="fa-regular fa-circle-xmark" id="${index}" onclick="removeitem(this.id)"></i></div>
   </div>
               `
   orders.innerHTML+=neworder;           
 })
 cashcalc();
}
function cashcalc(){
    let totalcash =0;
    orderedburger.forEach(element=>{
        totalcash = totalcash + element.price;
    })
     subtotal.innerHTML = `$`+totalcash;
     taxtotal.innerHTML = `$`+(totalcash*12/100);
     total.innerHTML = `$`+(totalcash+(totalcash*12/100));
     itemnumber.innerHTML = orderedburger.length;
}

