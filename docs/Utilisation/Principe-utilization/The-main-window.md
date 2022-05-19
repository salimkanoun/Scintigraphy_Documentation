---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

After starting the program, you will see the main window:

<img src="https://imagej.net/media/learn/fiji-main-window.png" />

On macOS, the menu bar will appear on the top of the screen (as with all macOS 
applications).
## The search bar

The search bar is a convenient way to quickly find and launch commands, search for 
documentation, and more. The search panel can be brought up by clicking and typing 
into the search bar, or via the keyboard shortcut 
**Ctrl** + **L**

<img src="https://imagej.net/media/learn/fiji-search-window.png" />

### Results

These are the plugins/commands that match your search query, sorted by type of 
result. Results can be navigated with the mouse or arrow keys, and the highlighted 
command can be executed with ↵ Enter or double-clicking.

### Categories
Categories can be (de)selected as desired to expand or restrict the scope of your 
search, as desired.

### Search Options

<img src="https://imagej.net/media/learn/fiji-search-options.png" />
<p>The <code class="language-plaintext highlighter-rouge">...</code> button opens a 
panel with more options for controlling your search behavior.</p>

### Details
The details panel provides more information about the selected search result.

### Action Buttons

These buttons can be used to take alternative actions (beyond just running a given command) such as opening the plugin’s source or wiki page.

## The menu bar
In the menu bar, you will find most of the functionality, such as loading/saving files, processing them, and plugins will be installed into the menus, too.

The menus have different purposes:

<Tabs>
  <TabItem value="File" label="File">
    File input/output, new files
  </TabItem>
    <TabItem value="Edit" label="Edit">
   Selection/ROI handling
  </TabItem>
    <TabItem value="Image" label="Image">
    Visualization, stack manipulation
  </TabItem>
    <TabItem value="Process" label="Process">
    Image filters
  </TabItem>
    <TabItem value="Analyze" label="Analyze">
    Statistics
  </TabItem>
    <TabItem value="Plugins" label="Plugins">
    Plugins, Macros and Utilities
  </TabItem>
    <TabItem value="Window" label="Window">
    	Windows
  </TabItem>
    <TabItem value="Help" label="Help">
    Help & Links
  </TabItem>
</Tabs>

## The tool bar
The toolbar mostly contains selection tools: the rectangle, ellipse, polygon, 
freehand and straight line selection tool. By clicking on the icon, you activate the 
tool.

Some tools offer option dialogs which you can open by double clicking the icon. This 
example shows the option dialog of the Oval Tool:
<img src="https://imagej.net/media/learn/oval-tool-option-dialog.png" />

<p>If there is a small red arrow in the lower right corner of the 
tool icon, you can right-click (<kbd class="key">⌃ Ctrl</kbd>
+
<span class="key"><img src="https://upload.wikimedia.org/
wikipedia/commons/2/27/LMB_click.svg" width="20"/> Left Click </span>on an Apple 
mouse) and select an alternative selection tool (e.g. a circular 
brush selection tool which shares the icon with the ellipse selection 
tool). Example:</p>

<img src="https://imagej.net/media/learn/alternative-tools.png" />

## The status bar

The status bar displays useful information at startup, and when running plugins. It also shows a progress bar on the right side for long-running processes:

<img src="https://imagej.net/media/learn/status-bar-with-progress.png" />

A single mouse click on the status bar will show the information about ImageJ and Java version as well as about memory consumption:

<img src="https://imagej.net/media/learn/default-status-message.png" />