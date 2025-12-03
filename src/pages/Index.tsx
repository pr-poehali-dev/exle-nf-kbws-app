import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

type Screen = 'home' | 'tables' | 'search' | 'settings';

const Index = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [orders, setOrders] = useState([
    {
      id: '1258-3',
      name: 'E2E-1 U/UTP cat 5e PVC 4x2x0,48 Cu Solid INDOOR RC Серый',
      specs: '100м',
      cu: '60g',
      supplier1: '285',
      supplier2: '80',
      supplier3: '225',
      status: 'active',
      highlighted: true
    },
    {
      id: '1259-1',
      name: 'Mastero U/UTP cat 5e PE PVC 4x2x0,51 Cu Solid INDOOR Серый',
      specs: '305м',
      cu: '',
      supplier1: '285',
      supplier2: '80',
      supplier3: '',
      status: 'active',
      highlighted: true
    },
    {
      id: '1259-2',
      name: 'Mastero U/UTP cat 5e LSZH 4x2x0,51 Cu Solid INDOOR RC Оранжевый',
      specs: '305м',
      cu: '60',
      supplier1: '285',
      supplier2: '80',
      supplier3: '225',
      status: 'pending',
      highlighted: false
    },
    {
      id: '1262-1',
      name: 'HAF F/UTP cat 5e PE 4x2 x0,51 (0.50) Cu Solid OUTDOOR RC Чёрный',
      specs: '305м',
      cu: '100',
      supplier1: '450',
      supplier2: '130',
      supplier3: '',
      status: 'active',
      highlighted: false
    },
    {
      id: '1262-2',
      name: 'HAF F/UTP cat 5e PVC 4x2 x0,51 (0.50) Cu Solid INDOOR RC Серый',
      specs: '305м',
      cu: '60',
      supplier1: '275',
      supplier2: '80',
      supplier3: '280',
      status: 'active',
      highlighted: false
    },
    {
      id: '1262-3',
      name: 'HAF U/UTP cat 5e LSLZH 4x2 x0,51 (0.50) Cu Solid INDOOR RC Оранжевый',
      specs: '305м',
      cu: '250',
      supplier1: '1140',
      supplier2: '325',
      supplier3: '920',
      status: 'active',
      highlighted: true
    },
    {
      id: '1262-4',
      name: 'HAF U/UTP cat 5e PE 4x2 x0,51 (0.50) Cu Solid OUTDOOR RC Чёрный',
      specs: '305м',
      cu: '150',
      supplier1: '685',
      supplier2: '200',
      supplier3: '',
      status: 'pending',
      highlighted: false
    },
    {
      id: '1262-5',
      name: 'HAF U/UTP cat 5e PVC 4x2 x0,51 (0.50) Cu Solid INDOOR RC Серый',
      specs: '305м',
      cu: '380',
      supplier1: '1720',
      supplier2: '490',
      supplier3: '1400',
      status: 'active',
      highlighted: false
    },
  ]);

  const cableOrders = orders;

  const stats = {
    totalOrders: cableOrders.length,
    activeOrders: cableOrders.filter(o => o.status === 'active').length,
    suppliers: 3,
    totalValue: '2.4M ₽'
  };

  const moveOrderUp = (index: number) => {
    if (index === 0) return;
    const newOrders = [...orders];
    [newOrders[index - 1], newOrders[index]] = [newOrders[index], newOrders[index - 1]];
    setOrders(newOrders);
  };

  const moveOrderDown = (index: number) => {
    if (index === orders.length - 1) return;
    const newOrders = [...orders];
    [newOrders[index], newOrders[index + 1]] = [newOrders[index + 1], newOrders[index]];
    setOrders(newOrders);
  };

  const HomeScreen = () => (
    <div className="flex-1 overflow-y-auto p-4 pb-24 animate-fade-in">
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-1">Заказы кабеля</h1>
          <p className="text-sm text-muted-foreground">Управление заказами и поставками</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="Package" size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.totalOrders}</p>
                <p className="text-xs text-muted-foreground">Всего заказов</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <Icon name="CheckCircle" size={20} className="text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.activeOrders}</p>
                <p className="text-xs text-muted-foreground">Активные</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <Icon name="Users" size={20} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.suppliers}</p>
                <p className="text-xs text-muted-foreground">Поставщика</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <Icon name="DollarSign" size={20} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-xl font-bold text-foreground">{stats.totalValue}</p>
                <p className="text-xs text-muted-foreground">Сумма</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1" onClick={() => setActiveScreen('tables')}>
            <Icon name="Table" size={18} className="mr-2" />
            Открыть таблицу
          </Button>
          <Button variant="outline" onClick={() => setActiveScreen('search')}>
            <Icon name="Search" size={18} />
          </Button>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-foreground mb-3">Последние заказы</h2>
          <div className="space-y-2">
            {cableOrders.slice(0, 5).map((order, index) => (
              <Card
                key={index}
                className={`p-3 hover:shadow-md transition-all cursor-pointer ${
                  order.highlighted ? 'bg-amber-50 border-amber-200' : ''
                }`}
                onClick={() => {
                  setSelectedRow(index);
                  setActiveScreen('tables');
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Cable" size={16} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs font-mono">{order.id}</Badge>
                      {order.status === 'active' && (
                        <Badge className="text-xs bg-green-100 text-green-700 hover:bg-green-100">Активен</Badge>
                      )}
                    </div>
                    <p className="text-sm text-foreground line-clamp-2">{order.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{order.specs}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const TablesScreen = () => (
    <div className="flex-1 overflow-y-auto pb-24 animate-fade-in">
      <div className="p-4 bg-card border-b sticky top-0 z-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-xl font-bold text-foreground">Таблица заказов</h1>
            <Button size="sm" variant="outline">
              <Icon name="Download" size={16} className="mr-1" />
              Экспорт
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">{cableOrders.length} позиций • 3 поставщика</p>
        </div>
      </div>

      <div className="p-4">
        <Card className="overflow-hidden">
          <ScrollArea className="w-full">
            <div className="min-w-[800px]">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 sticky top-0">
                  <tr>
                    <th className="p-2 text-center font-semibold border-r text-xs w-16">№</th>
                    <th className="p-2 text-left font-semibold border-r text-xs">№ Заказа</th>
                    <th className="p-2 text-left font-semibold border-r text-xs">Наименование</th>
                    <th className="p-2 text-center font-semibold border-r text-xs">Cu</th>
                    <th className="p-2 text-center font-semibold border-r text-xs">Пост. 1</th>
                    <th className="p-2 text-center font-semibold border-r text-xs">Пост. 2</th>
                    <th className="p-2 text-center font-semibold border-r text-xs">Пост. 3</th>
                    <th className="p-2 text-center font-semibold text-xs w-20">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {cableOrders.map((order, index) => (
                    <tr
                      key={index}
                      className={`hover:bg-muted/30 transition-colors border-b ${
                        order.highlighted ? 'bg-amber-50' : ''
                      } ${selectedRow === index ? 'bg-primary/5' : ''}`}
                      onClick={() => setSelectedRow(index)}
                    >
                      <td className="p-2 border-r text-center">
                        <Badge variant="secondary" className="text-xs font-semibold">
                          {index + 1}
                        </Badge>
                      </td>
                      <td className="p-2 border-r">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="font-mono text-xs">{order.id}</Badge>
                          {order.status === 'active' && (
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          )}
                        </div>
                      </td>
                      <td className="p-2 border-r text-xs">{order.name}</td>
                      <td className="p-2 border-r text-center text-xs font-medium">{order.cu || '—'}</td>
                      <td className="p-2 border-r text-center text-xs font-medium">{order.supplier1 || '—'}</td>
                      <td className="p-2 border-r text-center text-xs font-medium">{order.supplier2 || '—'}</td>
                      <td className="p-2 border-r text-center text-xs font-medium">{order.supplier3 || '—'}</td>
                      <td className="p-2">
                        <div className="flex items-center justify-center gap-1">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-7 w-7 p-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              moveOrderUp(index);
                            }}
                            disabled={index === 0}
                          >
                            <Icon name="ChevronUp" size={16} />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-7 w-7 p-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              moveOrderDown(index);
                            }}
                            disabled={index === cableOrders.length - 1}
                          >
                            <Icon name="ChevronDown" size={16} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollArea>
        </Card>

        <div className="mt-4 flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Icon name="Plus" size={16} className="mr-1" />
            Добавить строку
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <Icon name="Filter" size={16} className="mr-1" />
            Фильтры
          </Button>
        </div>
      </div>
    </div>
  );

  const SearchScreen = () => {
    const filteredOrders = searchQuery
      ? cableOrders.filter(order =>
          order.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          order.id.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

    return (
      <div className="flex-1 overflow-y-auto p-4 pb-24 animate-fade-in">
        <div className="max-w-2xl mx-auto space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-1">Поиск</h1>
            <p className="text-sm text-muted-foreground">Найдите заказ по номеру или названию</p>
          </div>

          <div className="relative">
            <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Искать заказы..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11"
            />
          </div>

          {searchQuery && filteredOrders.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Найдено: {filteredOrders.length}</p>
              {filteredOrders.map((order, index) => (
                <Card
                  key={index}
                  className={`p-3 hover:shadow-md transition-all cursor-pointer ${
                    order.highlighted ? 'bg-amber-50 border-amber-200' : ''
                  }`}
                  onClick={() => {
                    setSelectedRow(cableOrders.indexOf(order));
                    setActiveScreen('tables');
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Cable" size={16} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs font-mono">{order.id}</Badge>
                        {order.status === 'active' && (
                          <Badge className="text-xs bg-green-100 text-green-700 hover:bg-green-100">Активен</Badge>
                        )}
                      </div>
                      <p className="text-sm text-foreground">{order.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{order.specs}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {searchQuery && filteredOrders.length === 0 && (
            <Card className="p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center">
                <Icon name="SearchX" size={24} className="text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">Ничего не найдено</p>
            </Card>
          )}

          {!searchQuery && (
            <Card className="p-10 text-center">
              <div className="w-14 h-14 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center">
                <Icon name="Search" size={28} className="text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-sm">Начните вводить для поиска</p>
            </Card>
          )}
        </div>
      </div>
    );
  };

  const SettingsScreen = () => (
    <div className="flex-1 overflow-y-auto p-4 pb-24 animate-fade-in">
      <div className="max-w-2xl mx-auto space-y-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Настройки</h1>
          <p className="text-sm text-muted-foreground">Профиль и конфигурация</p>
        </div>

        <Card className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="w-14 h-14">
              <AvatarFallback className="bg-primary text-primary-foreground text-lg">МС</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-foreground">Менеджер склада</h2>
              <p className="text-xs text-muted-foreground">manager@company.ru</p>
            </div>
            <Button variant="outline" size="sm">Изменить</Button>
          </div>

          <div className="space-y-1">
            <button className="w-full flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Cloud" size={16} className="text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-medium text-foreground">Синхронизация</h3>
                  <p className="text-xs text-muted-foreground">Google Drive, OneDrive</p>
                </div>
              </div>
              <Icon name="ChevronRight" size={18} className="text-muted-foreground" />
            </button>

            <button className="w-full flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Bell" size={16} className="text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-medium text-foreground">Уведомления</h3>
                  <p className="text-xs text-muted-foreground">Push и Email</p>
                </div>
              </div>
              <Icon name="ChevronRight" size={18} className="text-muted-foreground" />
            </button>

            <button className="w-full flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Database" size={16} className="text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-medium text-foreground">Хранилище</h3>
                  <p className="text-xs text-muted-foreground">4.2 GB из 10 GB</p>
                </div>
              </div>
              <Icon name="ChevronRight" size={18} className="text-muted-foreground" />
            </button>

            <button className="w-full flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="HelpCircle" size={16} className="text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-medium text-foreground">Помощь</h3>
                  <p className="text-xs text-muted-foreground">FAQ и поддержка</p>
                </div>
              </div>
              <Icon name="ChevronRight" size={18} className="text-muted-foreground" />
            </button>
          </div>
        </Card>

        <Button variant="outline" className="w-full">
          <Icon name="LogOut" size={18} className="mr-2" />
          Выйти
        </Button>
      </div>
    </div>
  );

  const navigationItems: { id: Screen; icon: string; label: string }[] = [
    { id: 'home', icon: 'Home', label: 'Главная' },
    { id: 'tables', icon: 'Table', label: 'Таблица' },
    { id: 'search', icon: 'Search', label: 'Поиск' },
    { id: 'settings', icon: 'Settings', label: 'Настройки' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {activeScreen === 'home' && <HomeScreen />}
      {activeScreen === 'tables' && <TablesScreen />}
      {activeScreen === 'search' && <SearchScreen />}
      {activeScreen === 'settings' && <SettingsScreen />}

      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50">
        <div className="max-w-2xl mx-auto px-2">
          <div className="flex items-center justify-around h-16">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveScreen(item.id)}
                className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1.5 rounded-lg transition-all ${
                  activeScreen === item.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon
                  name={item.icon as any}
                  size={22}
                  className={`transition-transform ${activeScreen === item.id ? 'scale-110' : ''}`}
                />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Index;