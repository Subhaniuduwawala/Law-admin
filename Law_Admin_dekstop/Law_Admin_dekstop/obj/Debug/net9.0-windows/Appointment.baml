   M S B A M L   `   `   `  ����L  HLaw_Admin_dekstop, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null5clr-namespace:Law_Admin_dekstopLaw_Admin_dekstop  5      #    Law_Admin_dekstop.Appointment   5      W SPresentationCore, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=9.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5      R NSystem.Xaml, Version=9.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5      Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5      @d2http://schemas.microsoft.com/expression/blend/2008     5      1localclr-namespace:Law_Admin_dekstop     5      _ [MaterialDesignThemes.Wpf, Version=5.2.0.0, Culture=neutral, PublicKeyToken=df2a72020bd7962aFmaterialDesign1http://materialdesigninxaml.net/winfx/xaml/themes  5        N� Title$  Appointment��5
       N� 
Background �	#FF3E3B3B.��5      � ��5   
   �� 5       �� ImageSource$[ UC:\Users\Asus\Documents\Project\github\Law_Admin_dekstop\Law_Admin_dekstop\image2.jpg��6    j� Stretch$ UniformToFill=�6}   .+�5   
   � $��20q�6   .+�5      �� -   5        $��50��5      $��50��6    $��0,10,0,0q�6,   
������ 
������ $
��Left=�5      $	��Top=�60   .��5      �� $[��UC:\Users\Asus\Documents\Project\github\Law_Admin_dekstop\Law_Admin_dekstop\image3.png��6   $��Uniform=�6w   5      �� 5      ���#F2F2F2 �� CornerRadius$ 10��6*    �� Padding$ 20q�6<   $	��400��6I   $��Center=�6U   $��Center=�6r   ._�5      �� .+�5      �� $��Get An Appointment��6    $��24(�6:   $
��Bold"�6H   ���#333333$��Center=�5        $��0,0,0,20q�6=   �� 5#      $��0,20,0,0q�6!   .+�5$      �� $��	Your Name��6$   
�������$��16(�6G   $��Center=�6U   $��5,0,0,0q�6p    J� IsHitTestVisible$ False��6�   �� 5%      -   5         ��Name$ NameTextBox��5%   "   $	��350��67   $��40��6C   $��16(�6O   ���#CCCCCC$��1q�6s   5&      �� 5(      $��0,20,0,0q�6!   .+�5)      �� $��
Your Email��6$   
�������$��16(�6H   $��Center=�6V   $��5,0,0,0q�6q   $ False��6�   �� 5*      -   5        $ EmailTextBox��5*   "   $	��350��68   $��40��6D   $��16(�6P   ���#CCCCCC$��1q�6t   5,      � 5/      $
��0,10q�6    � ColumnDefinitions 50      �� 51      $��2* �6/   �� 52      $��1* �6/   .+�55      (  "System.Windows.Controls.DatePicker  -   5        	  Name$	 
DatePicker��55   %   $	��220��69   $��40��6E   $��16(�6Q   $��0,0,0,0q�6_   �� 57      -   5        
 ��Name$
 
TimePicker��57   #   $	��110��67   $��40��6C   $��16(�6O   $��1��6]   ���#CCCCCC$��1q�58   2   .@�59      �� $��9.00 am - 10.00 am��6+   �� 5:      $��10.00 am - 11.00 am��6+   �� 5;      $��11.00 am - 12.00 pm��6+   �� 5<      $��01.00 pm - 02.00 pm��6+   �� 5=      $��02.00 pm - 03.00 pm��6+   5>      5?      �� 5B      -   5        $
 LawTypeComboBox��5B      $	��350��68   $��40��6D   $��16(�6P   $
��0,10q�6^   ���#CCCCCC$��1q�5C   5   .@�5D      �� $��Corporate Law��6'   �� 5E      $��Criminal Law��6'   �� 5F      $��
Family Law��6'   �� 5G      $��Immigration Law��6'   �� 5H      $��Intellectual Property Law��6'   5I      �� 5L      -   5        $
 LawyerComboBox��5L      $	��350��67   $��40��6C   $��16(�6O   $
��0,10q�6]   ���#CCCCCC$��1q�5M   5   .@�5N      �� $��Select a Lawyer��6'   �� 5O      $��John Doe��6'   �� 5P      $��
Jane Smith��6'   �� 5Q      $��Michael Johnson��6'   �� 5R      $��Emily Davis��6'   5S      �� 5V      -   5        $��Get An Appointment��5V      $	��350��6:   $��50��6F   $��16(�6R   $
��Bold"�6`   ���#FFA500
�������$��0q�5W   E    � Cursor$
 Hand��6Y   $��0,20,0,0q�6g   5X      5Y      5Z      5[      5\      5]      