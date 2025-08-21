import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideHouse,
  lucideInbox,
  lucideCalendar,
  lucideSearch,
  lucideSettings,
  lucideMenu,
  lucideEllipsis,
} from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { BrnSeparator } from '@spartan-ng/brain/separator';
import {
  HlmSidebarComponent,
  HlmSidebarContentDirective,
  HlmSidebarFooterDirective,
  HlmSidebarGroupDirective,
  HlmSidebarGroupActionDirective,
  HlmSidebarGroupContentDirective,
  HlmSidebarGroupLabelDirective,
  HlmSidebarHeaderDirective,
  HlmSidebarInputDirective,
  // HlmSidebarInsetDirective,
  HlmSidebarMenuDirective,
  HlmSidebarMenuActionDirective,
  HlmSidebarMenuBadgeDirective,
  HlmSidebarMenuButtonDirective,
  HlmSidebarMenuItemDirective,
  HlmSidebarMenuSubDirective,
  HlmSidebarMenuSubButtonDirective,
  HlmSidebarRailDirective,
  HlmSidebarSeparatorDirective,
  HlmSidebarTriggerComponent,
} from '@spartan-ng/helm/sidebar';

@Component({
  selector: 'oneview-home',

   imports: [
    HlmSidebarComponent,
    HlmSidebarHeaderDirective,
    HlmSidebarContentDirective,
    HlmSidebarFooterDirective,
    HlmSidebarMenuDirective,
    HlmSidebarMenuBadgeDirective,
    HlmSidebarMenuItemDirective,
    HlmSidebarMenuButtonDirective,
    HlmSidebarTriggerDirective,
    HlmSidebarRailDirective,
    HlmIcon,
    HlmSidebarGroupDirective,
    HlmSidebarGroupLabelDirective,
    HlmSidebarGroupContentDirective,
    HlmSidebarSeparatorDirective,
    BrnSeparator,
    HlmSidebarGroupActionDirective,
    HlmSidebarInputDirective,
    // HlmSidebarInsetDirective,
    HlmSidebarMenuActionDirective,
    HlmSidebarMenuSubDirective,
    HlmSidebarMenuSubButtonDirective,
    NgIcon,
  ],
  providers: [
    provideIcons({
      lucideHouse,
      lucideInbox,
      lucideCalendar,
      lucideSearch,
      lucideSettings,
      lucideMenu,
      lucideEllipsis,
    }),
  ],
  template: `
  <div class="flex h-screen">
      <hlm-sidebar side="left">
        <div hlmSidebarHeader>
          <h1 class="text-2xl font-bold">My app</h1>
          <div hlmSidebarGroup>
            <div hlmSidebarGroupContent class="relative">
              <input hlmSidebarInput placeholder="Search" class="pl-8" />
              <ng-icon
                hlm
                name="lucideSearch"
                size="sm"
                class="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50"
              ></ng-icon>
            </div>
          </div>
        </div>
        <div hlmSidebarContent>
          <div hlmSidebarGroup>
            <div hlmSidebarGroupLabel>Application</div>
            <button hlmSidebarGroupAction>
              <ng-icon hlm name="lucideEllipsis" size="sm"></ng-icon>
            </button>

            <div hlmSidebarGroupContent>
              <ul hlmSidebarMenu>
                <li hlmSidebarMenuItem>
                  <button
                    hlmSidebarMenuButton
                    aria-describedby="Home"
                    [isActive]="true"
                  >
                    <ng-icon hlm name="lucideHouse" size="sm"></ng-icon>
                    <span>Home</span>
                  </button>
                  <ul hlmSidebarMenuSub>
                    <li>
                      <a hlmSidebarMenuSubButton>
                        <ng-icon hlm name="lucideHouse" size="sm"></ng-icon>
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a hlmSidebarMenuSubButton>
                        <ng-icon hlm name="lucideHouse" size="sm"></ng-icon>
                        <span>Home</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <!-- Home -->
                <li hlmSidebarMenuItem>
                  <button hlmSidebarMenuButton aria-describedby="Home">
                    <ng-icon hlm name="lucideHouse" size="sm"></ng-icon>
                    <span>Home</span>
                  </button>
                  <button hlmSidebarMenuAction aria-describedby="Home">
                    <ng-icon hlm name="lucideEllipsis" size="sm"></ng-icon>
                  </button>
                </li>

                <!-- Inbox -->
                <li hlmSidebarMenuItem>
                  <button
                    hlmSidebarMenuButton
                    tooltip="Inbox"
                    aria-describedby="Inbox"
                  >
                    <ng-icon hlm name="lucideInbox" size="sm"></ng-icon>
                    <span>Inbox</span>
                  </button>
                </li>

                <!-- Calendar -->
                <li hlmSidebarMenuItem>
                  <button
                    hlmSidebarMenuButton
                    tooltip="Calendar"
                    aria-describedby="Calendar"
                  >
                    <ng-icon hlm name="lucideCalendar" size="sm"></ng-icon>
                    <span>Calendar</span>
                  </button>
                </li>
                <brn-separator hlmSidebarSeparator />

                <!-- Search -->
                <li hlmSidebarMenuItem>
                  <button
                    hlmSidebarMenuButton
                    tooltip="Search"
                    aria-describedby="Search"
                  >
                    <ng-icon hlm name="lucideSearch" size="sm"></ng-icon>
                    <span>Search</span>
                    <div hlmSidebarMenuBadge>10</div>
                  </button>
                </li>

                <!-- Settings -->
                <li hlmSidebarMenuItem>
                  <button
                    hlmSidebarMenuButton
                    tooltip="Settings"
                    aria-describedby="Settings"
                  >
                    <ng-icon hlm name="lucideSettings" size="sm"></ng-icon>
                    <span>Settings</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div hlmSidebarGroup collapsible="icon">
            <div hlmSidebarGroupLabel>Application1</div>
            <div hlmSidebarGroupContent>
              <ul hlmSidebarMenu>
                <!-- Home -->
                <li hlmSidebarMenuItem>
                  <button
                    hlmSidebarMenuButton
                    tooltip="Home"
                    aria-describedby="Home"
                  >
                    <ng-icon hlm name="lucideHouse" size="sm"></ng-icon>
                    <span>Home</span>
                  </button>
                </li>

                <!-- Inbox -->
                <li hlmSidebarMenuItem>
                  <button
                    hlmSidebarMenuButton
                    tooltip="Inbox"
                    aria-describedby="Inbox"
                  >
                    <ng-icon hlm name="lucideInbox" size="sm"></ng-icon>
                    <span>Inbox</span>
                  </button>
                </li>

                <!-- Calendar -->
                <li hlmSidebarMenuItem>
                  <button
                    hlmSidebarMenuButton
                    tooltip="Calendar"
                    aria-describedby="Calendar"
                  >
                    <ng-icon hlm name="lucideCalendar" size="sm"></ng-icon>
                    <span>Calendar</span>
                  </button>
                </li>

                <!-- Search -->
                <li hlmSidebarMenuItem>
                  <button
                    hlmSidebarMenuButton
                    tooltip="Search"
                    aria-describedby="Search"
                  >
                    <ng-icon hlm name="lucideSearch" size="sm"></ng-icon>
                    <span>Search</span>
                  </button>
                </li>

                <!-- Settings -->
                <li hlmSidebarMenuItem>
                  <button
                    hlmSidebarMenuButton
                    tooltip="Settings"
                    aria-describedby="Settings"
                  >
                    <ng-icon hlm name="lucideSettings" size="sm"></ng-icon>
                    <span>Settings</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div hlmSidebarFooter>
          <button
            hlmSidebarMenuButton
            tooltip="Settings"
            aria-describedby="Settings"
          >
            <ng-icon hlm name="lucideSettings" size="sm"></ng-icon>
            <span>Settings</span>
          </button>
        </div>

        <!-- Rail for resizing -->
        <button hlmSidebarRail></button>
      </hlm-sidebar>
      <button hlmSidebarTrigger>
        <ng-icon hlm name="lucideMenu" size="sm"></ng-icon>
      </button>
      <!-- <main hlmSidebarInset></main> -->
      <!-- Main content -->
      <div class="flex flex-col items-center justify-center h-screen w-full">
        <h1 class="text-2xl font-bold">Hello World</h1>
      </div>
    </div>
  `,
})
export default class HomeComponent {}
